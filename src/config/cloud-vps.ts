
export const cloudVPSConfig = {
    currency: "£",
    serviceTypes: [
        {
            id: 'linux',
            name: 'Linux VPS Plans',
            description: 'Deploy a Linux virtual server for efficient, cost-effective, and secure hosting.',
            pricePerGB: '£1.30',
        },
        {
            id: 'windows',
            name: 'Windows VPS Plans',
            description: 'Deploy a Windows virtual server for resource-heavy applications that use the Microsoft ecosystem.',
            pricePerGB: '£1.50',
        }
    ],
    regions: [
        { id: 'uk-ldn', name: 'London, UK', country: 'GB' },
        { id: 'us-nyc', name: 'New York City, US', country: 'US' },
    ],
    plans: {
        linux: [
            {
                id: 'linux-04',
                name: 'LNX-04',
                vcpu: '2 vCPU',
                ram: '4GB',
                storage: '40GB NVMe',
                bandwidth: '2TB',
                price: 5.20,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-04',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-04'
                }
            },
            {
                id: 'linux-08',
                name: 'LNX-08',
                vcpu: '3 vCPU',
                ram: '8GB',
                storage: '80GB NVMe',
                bandwidth: '4TB',
                price: 10.40,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-08',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-08'
                }
            },
            {
                id: 'linux-12',
                name: 'LNX-12',
                vcpu: '4 vCPU',
                ram: '12GB',
                storage: '120GB NVMe',
                bandwidth: '6TB',
                price: 15.60,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-12',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-12'
                }
            },
            {
                id: 'linux-16',
                name: 'LNX-16',
                vcpu: '5 vCPU',
                ram: '16GB',
                storage: '160GB NVMe',
                bandwidth: '8TB',
                price: 20.80,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-16',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-16'
                }
            },
            {
                id: 'linux-24',
                name: 'LNX-24',
                vcpu: '6 vCPU',
                ram: '24GB',
                storage: '240GB NVMe',
                bandwidth: '12TB',
                price: 31.20,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-24',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-24'
                }
            },
            {
                id: 'linux-32',
                name: 'LNX-32',
                vcpu: '8 vCPU',
                ram: '32GB',
                storage: '320GB NVMe',
                bandwidth: '16TB',
                price: 41.60,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-32',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/lnx-32'
                }
            },
        ],
        windows: [
            {
                id: 'windows-04',
                name: 'WIN-04',
                vcpu: '2 vCPU',
                ram: '4GB',
                storage: '40GB NVMe',
                bandwidth: '2TB',
                price: 6.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-04',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-04'
                }
            },
            {
                id: 'windows-08',
                name: 'WIN-08',
                vcpu: '3 vCPU',
                ram: '8GB',
                storage: '80GB NVMe',
                bandwidth: '4TB',
                price: 12.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-08',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-08'
                }
            },
            {
                id: 'windows-12',
                name: 'WIN-12',
                vcpu: '4 vCPU',
                ram: '12GB',
                storage: '120GB NVMe',
                bandwidth: '6TB',
                price: 18.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-12',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-12'
                }
            },
            {
                id: 'windows-16',
                name: 'WIN-16',
                vcpu: '5 vCPU',
                ram: '16GB',
                storage: '160GB NVMe',
                bandwidth: '8TB',
                price: 24.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-16',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-16'
                }
            },
            {
                id: 'windows-24',
                name: 'WIN-24',
                vcpu: '6 vCPU',
                ram: '24GB',
                storage: '240GB NVMe',
                bandwidth: '12TB',
                price: 36.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-24',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-24'
                }
            },
            {
                id: 'windows-32',
                name: 'WIN-32',
                vcpu: '8 vCPU',
                ram: '32GB',
                storage: '320GB NVMe',
                bandwidth: '16TB',
                price: 48.00,
                links: {
                    'uk-ldn': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-32',
                    'us-nyc': 'https://client.intranex.org/index.php?rp=/store/virtual-private-servers/win-32'
                }
            },
        ]

    }
};
