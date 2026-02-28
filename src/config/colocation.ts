import { Wrench, CloudCogIcon, ServerIcon, ShieldIcon, NetworkIcon, ZapIcon } from 'lucide-react';

export const colocationConfig = {
    currency: "£",
    units: [
        {
            id: 'basic',
            name: 'Basic',
            description: 'Perfect for startups and small businesses',
            price: 150,
            popular: true,
            specs: {
                space: '1U Rack Space',
                power: '200W Power',
                bandwidth: '100TB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '24/7 Monitoring',
                'Monthly Reporting',
                'Basic Security Management',
                'Basic Cloud Management',
                'Performance Optimisation',
                'Priority Support',
                'System Administration',
                'Migration Assistance',
                '& More...'
            ],
            link: 'https://client.intranex.org/submitticket.php'
        },
        {
            id: 'professional',
            name: 'Professional',
            description: 'Perfect for larger businesses and organisations',
            price: 500,
            popular: true,
            specs: {
                space: '2U Rack Space',
                power: '400W Power',
                bandwidth: '200TB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '24/7 Monitoring',
                'Weekly Reporting',
                'Enhanced Security Management',
                'Enhanced Cloud Management',
                'Performance Optimisation',
                'Priority Support',
                'System Administration',
                'Migration Assistance', 
                'Strategic Consultations',
                'Infrastructure Design',
                '& More...'

            ],
            link: 'https://client.intranex.org/submitticket.php'
        }
    ],
    facilities: [
        {
            title: "Server Management",
            icon: ServerIcon,
            description: "24/7 Monitoring & Alerts, Patch Management, Performance Optimisation, Backups & Recovery",
            items: [
                "Monitoring & Alerts",
                "Software Installations",
                "Performance Optimisation",
                "Backups & Recovery"
            ]
        },
        {
            title: "Security Management",
            icon: ShieldIcon,
            description: "Threat Detection & Prevention, Vulnerability Assessments, Security Policy Management, Compliance Assistance",
            items: [
                "Threat Detection & Prevention",
                "Vulnerability Assessments",
                "Security Policy Management",
                "Compliance Assistance"
            ]
        },
        {
            title: "Network Management",
            icon: NetworkIcon,
            description: "Network Monitoring, Troubleshooting & Optimisation, Infrastructure Planning, Attack Prevention",
            items: [
                "Network Monitoring",
                "Troubleshooting & Optimisation",
                "Infrastructure Planning",
                "Attack Prevention"
            ]
        },
        {
            title: "Cloud Services",
            icon: CloudCogIcon,
            description: "Migration Assistance, Cost Optimisation, Scalability Management",
            items: [
                "Migration Assistance",
                "Cost Optimisation",
                "Scalability Management",
            ]
        },
        {
            title: "IT Consultations",
            icon: Wrench,
            description: "Strategic Planning, Frequent Reporting, Infrastructure Design",
            items: [
                "Strategic Planning",
                "Frequent Reporting",
                "Infrastructure Design",
            ]
        },
        {
            title: "More Features",
            icon: ZapIcon,
            description: "24/7 Priority Support, 99.99% Uptime Guarantee, Exclusive Offers",
            items: [
                "24/7 Priority Support",
                "99.99% Uptime Guarantee",
                "Exclusive Offers",
            ]
        }
    ]
};
