import {
  Server, HardDrive, Network, Shield, Monitor, Settings,
  Wifi, Phone, Globe, Cloud, Cable, PenTool,
  Gauge, Laptop, LayoutDashboard, Headphones
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  services: string[];
  hardwareVendors?: string[];
  software: {
    paid: string[];
    openSource: string[];
  };
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'windows-linux-servers',
    title: 'Windows & Linux Servers',
    icon: Server,
    shortDescription: 'Complete server deployment, configuration, hardening, and migration services for Windows and Linux environments.',
    services: [
      'OS Installation, Configuration & Hardening',
      'Active Directory (AD) Design & Migration',
      'DNS, DHCP, File & Print Server Setup',
      'Linux Web Server Setup (LAMP/LEMP Stack)',
      'Patch Management & Security Audits',
      'High Availability & Failover Clustering',
    ],
    hardwareVendors: ['Dell EMC (PowerEdge Series)', 'HPE (ProLiant Gen10/Gen11)', 'Lenovo (ThinkSystem)'],
    software: {
      paid: ['Microsoft Windows Server (2019/2022)', 'Red Hat Enterprise Linux (RHEL)', 'SUSE Linux Enterprise'],
      openSource: ['Ubuntu Server', 'Debian', 'Rocky Linux', 'AlmaLinux'],
    },
  },
  {
    id: 'hardware-servers',
    title: 'Hardware Servers',
    icon: HardDrive,
    shortDescription: 'Rack mounting, hardware upgrades, RAID configuration, and preventive maintenance for enterprise server hardware.',
    services: [
      'Rack Mounting & Cable Management',
      'Hardware Upgrades (RAM, HDD/SSD, CPU)',
      'RAID Configuration & Data Recovery',
      'Server Room Environmental Monitoring Setup',
      'Hardware Health Checks & Preventive Maintenance (PM)',
    ],
    hardwareVendors: ['Dell EMC', 'HPE', 'Lenovo', 'Fujitsu', 'Cisco UCS (Unified Computing System)'],
    software: {
      paid: ['iDRAC (Dell)', 'iLO (HPE)', 'XClarity (Lenovo)'],
      openSource: ['OpenIPMI', 'IPMITool'],
    },
  },
  {
    id: 'network-switches',
    title: 'Network Switches',
    icon: Network,
    shortDescription: 'VLAN segmentation, multi-layer switching, PoE planning, and port security configuration.',
    services: [
      'VLAN Segmentation & Inter-VLAN Routing',
      'Core, Distribution, and Access Layer Design',
      'PoE (Power over Ethernet) Planning for VoIP/CCTV',
      'Spanning Tree Protocol (STP) Configuration',
      'Port Security & MAC Filtering',
    ],
    hardwareVendors: ['Cisco (Catalyst, Nexus, Meraki)', 'Aruba (HPE)', 'Ubiquiti (UniFi, EdgeMax)', 'MikroTik', 'D-Link / TP-Link (SMB Solutions)'],
    software: {
      paid: ['Cisco IOS', 'SolarWinds Network Performance Monitor', 'PRTG'],
      openSource: ['Open vSwitch', 'LibreNMS'],
    },
  },
  {
    id: 'firewalls',
    title: 'Firewalls',
    icon: Shield,
    shortDescription: 'Firewall policy management, VPN setup, IDS/IPS deployment, web filtering, and SD-WAN configuration.',
    services: [
      'Firewall Rule Configuration & Policy Management',
      'VPN Setup (Site-to-Site, SSL VPN for Remote Users)',
      'Intrusion Detection/Prevention (IDS/IPS) Setup',
      'Web Filtering & Application Control',
      'SD-WAN Configuration',
    ],
    hardwareVendors: ['Fortinet (FortiGate)', 'Sophos (XG/XGS Firewall)', 'Palo Alto Networks', 'SonicWall', 'Cisco (Firepower)'],
    software: {
      paid: ['FortiOS', 'Sophos OS'],
      openSource: ['pfSense', 'OPNsense', 'IPFire'],
    },
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    icon: Monitor,
    shortDescription: 'P2V migration, VM provisioning, VDI deployment, and resource management across virtualization platforms.',
    services: [
      'Physical to Virtual (P2V) Migration',
      'Virtual Machine (VM) Provisioning & Management',
      'Snapshot & Backup Management',
      'VDI (Virtual Desktop Infrastructure) Deployment',
      'Resource Balancing (CPU/RAM Allocation)',
    ],
    hardwareVendors: ['VMware (Broadcom)', 'Microsoft', 'Nutanix', 'Citrix'],
    software: {
      paid: ['VMware vSphere/ESXi', 'Microsoft Hyper-V', 'Citrix Hypervisor'],
      openSource: ['Proxmox VE', 'XCP-ng', 'KVM (Kernel-based Virtual Machine)'],
    },
  },
  {
    id: 'windows-server-services',
    title: 'Windows Server Services',
    icon: Settings,
    shortDescription: 'Specialized Windows Server roles including Domain Controllers, GPO, WSUS, RDS, and Hyper-V clustering.',
    services: [
      'Domain Controller (DC) Setup',
      'Group Policy Object (GPO) Management',
      'WSUS (Windows Server Update Services) Deployment',
      'Remote Desktop Services (RDS) / Terminal Server',
      'Hyper-V Cluster Management',
    ],
    software: {
      paid: ['Windows Server Standard / Datacenter Editions', 'RDS CALs'],
      openSource: ['Samba 4 (Active Directory compatible DC on Linux)'],
    },
  },
  {
    id: 'wifi-access-points',
    title: 'Wi-Fi & Access Points',
    icon: Wifi,
    shortDescription: 'Wireless site surveys, SSID configuration, captive portals, mesh optimization, and P2P wireless links.',
    services: [
      'Wireless Site Surveys (Heatmaps)',
      'SSID Configuration (Guest, Corporate, IoT)',
      'Captive Portal Setup (for Hotels/Offices)',
      'Roaming & Mesh Network Optimization',
      'Point-to-Point (P2P) Wireless Links',
    ],
    hardwareVendors: ['Ubiquiti (UniFi)', 'Aruba (Instant On)', 'Cisco (Meraki, Catalyst)', 'TP-Link (Omada)', 'Grandstream (GWN Series)'],
    software: {
      paid: ['Cisco Meraki Dashboard', 'Aruba Central'],
      openSource: ['OpenWrt', 'DD-WRT'],
    },
  },
  {
    id: 'voip',
    title: 'VoIP (Voice Over IP)',
    icon: Phone,
    shortDescription: 'IP-PBX installation, SIP trunk configuration, IVR recording, and softphone integration for unified communications.',
    services: [
      'IP-PBX Installation (On-premise & Cloud)',
      'IP Phone Provisioning & Extension Mapping',
      'IVR (Interactive Voice Response) Recording & Setup',
      'SIP Trunk Configuration (Etisalat/Du)',
      'Softphone Integration (PC/Mobile)',
    ],
    hardwareVendors: ['Yealink', 'Grandstream', 'Cisco', 'Avaya', 'Fanvil'],
    software: {
      paid: ['3CX', 'Avaya IP Office', 'Microsoft Teams Phone'],
      openSource: ['Asterisk', 'FreePBX', 'Issabel'],
    },
  },
  {
    id: 'hosting-domain-emails',
    title: 'Hosting, Domain & Emails',
    icon: Globe,
    shortDescription: 'Domain registration, web hosting, corporate email setup, email migration, and SSL certificate management.',
    services: [
      'Domain Registration & DNS Management',
      'Web Hosting Setup (cPanel/Plesk)',
      'Corporate Email Setup (Exchange, Google Workspace, M365)',
      'Email Migration Services',
      'SSL Certificate Installation',
    ],
    hardwareVendors: ['Etisalat', 'Du', 'AEserver', 'GoDaddy', 'Namecheap', 'Bluehost'],
    software: {
      paid: ['cPanel', 'Plesk', 'Microsoft Exchange Server'],
      openSource: ['CyberPanel', 'ISPConfig', 'Postfix/Dovecot (Mail Server)'],
    },
  },
  {
    id: 'small-cloud-services',
    title: 'Small Cloud Services',
    icon: Cloud,
    shortDescription: 'Cloud storage setup, SaaS integration, cloud backup solutions, and hybrid cloud configurations.',
    services: [
      'Cloud Storage Setup (OneDrive, Google Drive, Dropbox)',
      'SaaS Application Integration',
      'Cloud Backup Solutions',
      'Hybrid Cloud Configuration',
    ],
    hardwareVendors: ['Microsoft Azure (UAE Regions)', 'AWS (UAE Region)', 'Google Cloud'],
    software: {
      paid: ['Microsoft 365', 'Google Workspace', 'Dropbox Business'],
      openSource: ['Nextcloud', 'ownCloud (Self-hosted Cloud Storage)'],
    },
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: Cable,
    shortDescription: 'Structured cabling, fiber optics, patch panel termination, server rack organization, and cable management.',
    services: [
      'Structured Cabling (Cat6, Cat6a, Fiber Optic)',
      'Patch Panel Termination & Testing (Fluke Test)',
      'Server Rack Organization & Dressing',
      'Cable Labeling & Documentation',
      'Conduit & Trunking Installation',
    ],
    hardwareVendors: ['3M / Corning (Fiber)', 'Schneider Electric / APC (Racks & UPS)', 'D-Link / Toten (Cabinets)', 'Belden / CommScope (Cabling)'],
    software: {
      paid: [],
      openSource: [],
    },
  },
  {
    id: 'network-design',
    title: 'Network Design',
    icon: PenTool,
    shortDescription: 'Network topology planning, IP addressing schemes, security architecture design, and scalability planning.',
    services: [
      'Network Topology Planning (Star, Mesh, Tree)',
      'IP Addressing Scheme Design (Subnetting)',
      'Network Security Architecture Design',
      'Scalability Planning',
      'Visio Diagrams & Documentation',
    ],
    software: {
      paid: ['Microsoft Visio', 'Lucidchart'],
      openSource: ['Draw.io (Diagrams.net)', 'Dia'],
    },
  },
  {
    id: 'optimize-network',
    title: 'Optimize Network',
    icon: Gauge,
    shortDescription: 'Bandwidth management, QoS configuration, latency analysis, bottleneck identification, and performance tuning.',
    services: [
      'Bandwidth Management & Traffic Shaping',
      'QoS (Quality of Service) Configuration for VoIP/Video',
      'Latency & Jitter Analysis',
      'Network Bottleneck Identification',
      'Firmware Updates & Performance Tuning',
    ],
    software: {
      paid: ['SolarWinds NPM', 'Paessler PRTG'],
      openSource: ['Wireshark (Packet Analysis)', 'iPerf (Bandwidth Testing)', 'Zabbix'],
    },
  },
  {
    id: 'pc-workstations',
    title: 'PC & Workstations',
    icon: Laptop,
    shortDescription: 'Custom PC builds, workstation calibration, OS installation, hardware stress testing, and gaming rig optimization.',
    services: [
      'Custom PC Building & Assembly',
      'OS & Driver Installation',
      'Hardware Stress Testing',
      'Workstation Calibration (for Architects/Designers)',
      'Gaming Rig Overclocking & Cooling Setup',
    ],
    hardwareVendors: [
      'Dell (OptiPlex, Latitude, Precision)',
      'HP (EliteDesk, ProBook, Z Series)',
      'Lenovo (ThinkCentre)',
      'ASUS (ROG)',
      'MSI',
      'Alienware',
    ],
    software: {
      paid: [],
      openSource: [],
    },
  },
  {
    id: 'central-management',
    title: 'Central Management',
    icon: LayoutDashboard,
    shortDescription: 'Centralized patch management, RMM implementation, software deployment, and endpoint protection.',
    services: [
      'Centralized Patch Management',
      'Remote Monitoring & Management (RMM) Implementation',
      'Software Deployment & Inventory Asset Management',
      'Antivirus/Endpoint Protection Management',
    ],
    software: {
      paid: ['Microsoft Endpoint Configuration Manager (SCCM)', 'ManageEngine Endpoint Central', 'TeamViewer', 'AnyDesk'],
      openSource: ['Tactical RMM', 'MeshCentral', 'OCS Inventory'],
    },
  },
  {
    id: 'managed-it-support',
    title: 'Managed IT Support (AMC)',
    icon: Headphones,
    shortDescription: 'SLA-based annual maintenance contracts, 24/7 helpdesk, preventive maintenance, and IT asset management.',
    services: [
      'SLA-based Annual Maintenance Contracts (AMC)',
      '24/7 Helpdesk Support (Remote & On-site)',
      'Preventive Maintenance Visits',
      'IT Asset Management & Reporting',
      'Vendor Management (Handling Etisalat/Du on behalf of client)',
    ],
    software: {
      paid: ['Jira Service Management', 'Freshdesk', 'Zoho Desk'],
      openSource: ['osTicket', 'Spiceworks', 'Zammad'],
    },
  },
];
