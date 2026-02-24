import { Zap, Thermometer, ShieldCheck, Globe, Wrench, FileCheck } from 'lucide-react';
import jakartaImg from '../assets/jakarta.jpg';
import frankfurtImg from '../assets/frankfurt.jpg';
import amsterdamImg from '../assets/amsterdam.jpg';
import dallasImg from '../assets/dallas.jpg';

export const colocationConfig = {
    currency: "$",
    units: [
        {
            id: '1u',
            name: '1U Colocation',
            description: 'Perfect for single server deployments',
            price: 69,
            popular: false,
            specs: {
                space: '1U Rack Space',
                power: '200W Power',
                bandwidth: '100TB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '1U Rack Space',
                '200W Power (Redundant)',
                '100TB Premium Bandwidth',
                '/29 IPv4 Addresses',
                '10Gbps Network Port',
                '24/7 Remote Hands Support'
            ],
            link: '#'
        },
        {
            id: '2u',
            name: '2U Colocation',
            description: 'More space for high-performance servers',
            price: 99,
            popular: true,
            specs: {
                space: '2U Rack Space',
                power: '400W Power',
                bandwidth: '200TB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '2U Rack Space',
                '400W Power (Redundant)',
                '200TB Premium Bandwidth',
                '/29 IPv4 Addresses',
                '10Gbps Network Port',
                '24/7 Remote Hands Support'
            ],
            link: '#'
        }
    ],
    racks: [
        {
            id: 'quarter',
            name: 'Quarter Rack',
            description: 'Perfect for small to medium deployments',
            price: 499,
            popular: true,
            specs: {
                space: '10U Rack Space',
                power: '3kW Power',
                bandwidth: '500TB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '10U Rack Space',
                '3kW Power Allocation',
                '500TB Premium Bandwidth',
                '/29 IPv4 Addresses',
                '10Gbps Network Port',
                '24/7 Remote Hands Support'
            ],
            link: '#'
        },
        {
            id: 'half',
            name: 'Half Rack',
            description: 'Ideal for growing infrastructure needs',
            price: 699,
            popular: false,
            specs: {
                space: '21U Rack Space',
                power: '3kW Power',
                bandwidth: '1PB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '21U Rack Space',
                '3kW Power Allocation',
                '1PB Premium Bandwidth',
                '/29 IPv4 Addresses',
                '10Gbps Network Port',
                'Priority Remote Hands'
            ],
            link: '#'
        },
        {
            id: 'full',
            name: 'Full Rack',
            description: 'Maximum capacity for enterprise deployments',
            price: 1399,
            popular: false,
            specs: {
                space: '42U Rack Space',
                power: '5kW Power',
                bandwidth: '2PB Premium',
                ip: '/29 IPv4 Addresses'
            },
            features: [
                '42U Rack Space',
                '5kW Power Allocation',
                '2PB Premium Bandwidth',
                '/29 IPv4 Addresses',
                '10Gbps Network Port',
                'Dedicated Account Manager'
            ],
            link: '#'
        }
    ],
    facilities: [
        {
            title: "Redundant Power",
            icon: Zap,
            description: "N+1 UPS Systems, Diesel Generators, Dual Power Feeds, 99.999% Power Uptime",
            items: [
                "N+1 UPS Systems",
                "Diesel Generators",
                "Dual Power Feeds",
                "99.999% Power Uptime"
            ]
        },
        {
            title: "Climate Control",
            icon: Thermometer,
            description: "Precision Cooling, Hot/Cold Aisle, 24/7 Monitoring",
            items: [
                "Precision Cooling",
                "Hot/Cold Aisle Design",
                "24/7 Temperature Monitoring",
                "Humidity Control"
            ]
        },
        {
            title: "Physical Security",
            icon: ShieldCheck,
            description: "Biometric Access, 24/7 Guards, CCTV, Mantrap Entry",
            items: [
                "Biometric Access Control",
                "24/7 Security Personnel",
                "Video Surveillance",
                "Mantrap Entry Systems"
            ]
        },
        {
            title: "Network Connectivity",
            icon: Globe,
            description: "Carrier-Neutral, Tier 1 Carriers, BGP Routing, DDoS Protection",
            items: [
                "Carrier-Neutral Facility",
                "Multiple Tier 1 Carriers",
                "BGP Routing Available",
                "DDoS Protection"
            ]
        },
        {
            title: "Remote Hands",
            icon: Wrench,
            description: "24/7 Availability, Installation, Cabling, Emergency Response",
            items: [
                "24/7/365 Availability",
                "Hardware Installation",
                "Cable Management",
                "Emergency Response"
            ]
        },
        {
            title: "Compliance & SLA",
            icon: FileCheck,
            description: "99.99% Uptime SLA, SOC 2 Type II, HIPAA, PCI DSS",
            items: [
                "99.99% Uptime SLA",
                "SOC 2 Type II Certified",
                "HIPAA Compliant",
                "PCI DSS Certified"
            ]
        }
    ],
    locations: [
        {
            id: 'jkt',
            city: 'Jakarta',
            country: 'Indonesia',
            facilityName: 'Cyber 1 Data Center',
            code: 'ID',
            description: 'Our Tier-3 facility in Jakarta offers low-latency connectivity throughout Southeast Asia. Equipped with redundant power and cooling systems to ensure maximum uptime.',
            specs: ['Tier-3 Certified', '24/7 Security', 'Carrier Neutral'],
            image: jakartaImg
        },
        {
            id: 'fra',
            city: 'Frankfurt',
            country: 'Germany',
            facilityName: 'Equinix FRA7',
            code: 'DE',
            description: 'Located in one of Europe’s busiest digital hubs, our Frankfurt datacenter provides direct access to DE-CIX and premium carriers for superior European connectivity.',
            specs: ['ISO 27001', 'Green Energy', 'DDoS Protection'],
            image: frankfurtImg
        },
        {
            id: 'ams',
            city: 'Amsterdam',
            country: 'Netherlands',
            facilityName: 'Equinix AM5',
            code: 'NL',
            description: 'A key gateway to Europe, our Amsterdam facility features state-of-the-art infrastructure and excellent connectivity options for international business.',
            specs: ['AMS-IX Connected', 'N+1 Power', 'Biometric Access'],
            image: amsterdamImg
        },
        {
            id: 'dal',
            city: 'Dallas',
            country: 'United States',
            facilityName: 'CoreSite DE1',
            code: 'US',
            description: 'Strategically located in Texas, our Dallas datacenter acts as a central hub for North American traffic, offering robust reliability and scalability.',
            specs: ['SSAE 18 Type II', 'High Density', 'Remote Hands'],
            image: dallasImg
        }
    ]
};
