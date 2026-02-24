
export const cloudVPSConfig = {
    currency: "$",
    serviceTypes: [
        {
            id: 'budget',
            name: 'Budget VPS',
            description: 'Intel Xeon Gold virtual servers. Perfect for entry-level workloads and cost-effective hosting.',
            pricePerGB: '$0.75',
        },
        {
            id: 'standard',
            name: 'Standard VPS',
            description: 'AMD EPYC Milan 7003 virtual servers. Great for general-purpose compute applications.',
            pricePerGB: '$1.00',
        },
        {
            id: 'premium',
            name: 'Premium VPS',
            description: 'AMD EPYC Genoa 9004 virtual servers. High performance for demanding applications.',
            pricePerGB: '$1.25',
        }
    ],
    regions: [
        { id: 'de-fra', name: 'Frankfurt, DE', country: 'DE' },
        { id: 'nl-ams', name: 'Amsterdam, NL', country: 'NL' },
        { id: 'us-dal', name: 'Dallas, TX', country: 'US' },
        { id: 'id-jkt', name: 'Jakarta, ID', country: 'ID' }
    ],
    plans: {
        budget: [
            {
                id: 'budget-xs',
                name: 'Budget XS',
                vcpu: '1 vCPU',
                ram: '1GB',
                storage: '20GB NVMe',
                bandwidth: '1TB',
                price: 3.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'budget-s',
                name: 'Budget S',
                vcpu: '1 vCPU',
                ram: '2GB',
                storage: '40GB NVMe',
                bandwidth: '2TB',
                price: 6.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'budget-m',
                name: 'Budget M',
                vcpu: '2 vCPU',
                ram: '4GB',
                storage: '80GB NVMe',
                bandwidth: '4TB',
                price: 12.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'budget-l',
                name: 'Budget L',
                vcpu: '4 vCPU',
                ram: '8GB',
                storage: '160GB NVMe',
                bandwidth: '5TB',
                price: 24.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'budget-xl',
                name: 'Budget XL',
                vcpu: '8 vCPU',
                ram: '16GB',
                storage: '320GB NVMe',
                bandwidth: '10TB',
                price: 48.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
        ],
        standard: [
            {
                id: 'standard-xs',
                name: 'Standard XS',
                vcpu: '1 vCPU',
                ram: '1GB',
                storage: '20GB NVMe',
                bandwidth: '1TB',
                price: 4.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'standard-s',
                name: 'Standard S',
                vcpu: '1 vCPU',
                ram: '2GB',
                storage: '40GB NVMe',
                bandwidth: '2TB',
                price: 8.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'standard-m',
                name: 'Standard M',
                vcpu: '2 vCPU',
                ram: '4GB',
                storage: '80GB NVMe',
                bandwidth: '4TB',
                price: 16.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'standard-l',
                name: 'Standard L',
                vcpu: '4 vCPU',
                ram: '8GB',
                storage: '160GB NVMe',
                bandwidth: '5TB',
                price: 32.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'standard-xl',
                name: 'Standard XL',
                vcpu: '8 vCPU',
                ram: '16GB',
                storage: '320GB NVMe',
                bandwidth: '10TB',
                price: 64.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
        ],
        premium: [
            {
                id: 'premium-xs',
                name: 'Premium XS',
                vcpu: '1 vCPU',
                ram: '2GB',
                storage: '50GB NVMe',
                bandwidth: '2TB',
                price: 10.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'premium-s',
                name: 'Premium S',
                vcpu: '2 vCPU',
                ram: '4GB',
                storage: '100GB NVMe',
                bandwidth: '4TB',
                price: 20.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'premium-m',
                name: 'Premium M',
                vcpu: '4 vCPU',
                ram: '8GB',
                storage: '200GB NVMe',
                bandwidth: '8TB',
                price: 40.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'premium-l',
                name: 'Premium L',
                vcpu: '8 vCPU',
                ram: '16GB',
                storage: '400GB NVMe',
                bandwidth: '16TB',
                price: 80.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
            {
                id: 'premium-xl',
                name: 'Premium XL',
                vcpu: '16 vCPU',
                ram: '32GB',
                storage: '800GB NVMe',
                bandwidth: '32TB',
                price: 160.00,
                links: {
                    'de-fra': '#',
                    'nl-ams': '#',
                    'us-dal': '#',
                    'id-jkt': '#'
                }
            },
        ]
    }
};
