<?php
// Security Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Rate Limiting (File-based)
    $ip = $_SERVER['REMOTE_ADDR'];
    $limit_file = sys_get_temp_dir() . "/rate_limit_" . md5($ip);
    $limit_time = 300; // 5 minutes

    if (file_exists($limit_file)) {
        $last_time = file_get_contents($limit_file);
        if (time() - $last_time < $limit_time) {
            http_response_code(429);
            echo json_encode(["status" => "error", "message" => "Too many requests. Please wait 5 minutes."]);
            exit();
        }
    }
    file_put_contents($limit_file, time());

    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // 2. Honeypot Check
    if (!empty($data['_gotcha'])) {
        // Silent failure for bots
        http_response_code(200); 
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
        exit();
    }

    // 3. Strict Sanitization
    function sanitize($data) {
        $data = trim($data);
        $data = strip_tags($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $name = sanitize($data['name'] ?? '');
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitize($data['phone'] ?? '');
    $service = sanitize($data['service'] ?? '');
    $message = sanitize($data['message'] ?? '');

    // Validation
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid input data."]);
        exit();
    }

    // 4. Header Injection Prevention
    if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid characters detected."]);
        exit();
    }

    $to = "Info@link-net360.com";
    $subject = "New Contact: $name ($service)";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Service Interest: $service\n\n";
    $email_content .= "Message:\n$message\n";
    $email_content .= "\n---\nSent from Link Net360 Website";

    $headers = "From: LinkNet360 Website <no-reply@link-net360.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Server error. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
