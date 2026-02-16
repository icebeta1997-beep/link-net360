$ErrorActionPreference = "SilentlyContinue"
$projectDir = "d:\My Website\link-net360"
$nextDir = "$projectDir\.next"
$deployDir = "$projectDir\deploy"
$zipPath = "$projectDir\linknet360-website.zip"

# Clean up
Write-Host "=== Cleaning previous deploy ===" -ForegroundColor Cyan
Remove-Item $deployDir -Recurse -Force
Remove-Item $zipPath -Force
New-Item $deployDir -ItemType Directory -Force | Out-Null

# Copy HTML files from .next/server/app
Write-Host "=== Copying HTML pages ===" -ForegroundColor Cyan
$serverApp = "$nextDir\server\app"

# Root page
if (Test-Path "$serverApp\index.html") {
    Copy-Item "$serverApp\index.html" "$deployDir\index.html"
    Write-Host "  + index.html"
}

# Sub-pages
foreach ($page in @("about", "services", "contact", "_not-found")) {
    $htmlFile = "$serverApp\$page.html"
    if (Test-Path $htmlFile) {
        Copy-Item $htmlFile "$deployDir\$page.html"
        Write-Host "  + $page.html"
    }
    # Also copy into subdirectory for clean URLs
    $subDir = "$deployDir\$page"
    New-Item $subDir -ItemType Directory -Force | Out-Null
    if (Test-Path $htmlFile) {
        Copy-Item $htmlFile "$subDir\index.html"
        Write-Host "  + $page/index.html"
    }
}

# 404 page
if (Test-Path "$serverApp\_not-found.html") {
    Copy-Item "$serverApp\_not-found.html" "$deployDir\404.html"
    Write-Host "  + 404.html"
}

# Copy _next/static (JS/CSS bundles)
Write-Host "=== Copying static assets ===" -ForegroundColor Cyan
if (Test-Path "$nextDir\static") {
    New-Item "$deployDir\_next\static" -ItemType Directory -Force | Out-Null
    Copy-Item "$nextDir\static\*" "$deployDir\_next\static" -Recurse -Force
    Write-Host "  + _next/static/"
}

# Copy public assets
Write-Host "=== Copying public assets ===" -ForegroundColor Cyan
$publicDir = "$projectDir\public"
if (Test-Path $publicDir) {
    Get-ChildItem $publicDir | ForEach-Object {
        Copy-Item $_.FullName "$deployDir\$($_.Name)" -Recurse -Force
        Write-Host "  + $($_.Name)"
    }
}

# Create ZIP
Write-Host "`n=== Creating ZIP ===" -ForegroundColor Cyan
Compress-Archive -Path "$deployDir\*" -DestinationPath $zipPath -Force

# Summary
$fileCount = (Get-ChildItem $deployDir -Recurse -File).Count
$zipSize = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host "`n=== DONE ===" -ForegroundColor Green
Write-Host "Deploy folder: $deployDir ($fileCount files)"
Write-Host "ZIP file: $zipPath ($zipSize MB)"
Write-Host "`nUpload this ZIP to Hostinger via 'Custom PHP/HTML website'"
