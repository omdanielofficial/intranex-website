export const dedicatedServerConfig = {
    currency: "$",
    filterPriceRange: { min: 0, max: 1000 },
    locations: [
        { id: 'de-fra', name: 'Frankfurt, DE', country: 'DE' },
        { id: 'nl-ams', name: 'Amsterdam, NL', country: 'NL' },
        { id: 'us-dal', name: 'Dallas, TX', country: 'US' },
        { id: 'id-jkt', name: 'Jakarta, ID', country: 'ID' }
    ],
    cpuTypes: [
        'Intel',
        'AMD'
    ],
    ramRanges: [
        { label: '32GB - 64GB', min: 32, max: 64 },
        { label: '96GB - 128GB', min: 96, max: 128 },
        { label: '192GB - 512GB', min: 192, max: 512 },
        { label: '768GB+', min: 768, max: 2048 },
    ],
    servers: [

        {
            id: 'ds-intel-1',
            cpu: 'Intel Xeon E-2388G',
            cores: 8,
            threads: 16,
            type: 'Intel',
            ram: '32GB DDR4',
            storage: '2x 480GB NVMe',
            bandwidth: '1Gbps Unmetered',
            portSpeed: '1Gbps',
            location: 'de-fra',
            price: 79.00,
            link: '#'
        },
        {
            id: 'ds-amd-1',
            cpu: 'AMD Ryzen 9 7950X',
            cores: 16,
            threads: 32,
            type: 'AMD',
            ram: '64GB DDR5',
            storage: '2x 1TB NVMe Gen4',
            bandwidth: '1Gbps Unmetered',
            portSpeed: '1Gbps',
            location: 'nl-ams',
            price: 139.00,
            link: '#'
        },
        {
            id: 'ds-intel-2',
            cpu: 'Dual Intel Xeon Gold 6330',
            cores: 56,
            threads: 112,
            type: 'Intel',
            ram: '128GB DDR4 ECC',
            storage: '2x 1.92TB NVMe',
            bandwidth: '10Gbps / 50TB',
            portSpeed: '10Gbps',
            location: 'us-dal',
            price: 299.00,
            link: '#'
        },
        {
            id: 'ds-amd-2',
            cpu: 'AMD EPYC 9354P',
            cores: 32,
            threads: 64,
            type: 'AMD',
            ram: '256GB DDR5 ECC',
            storage: '2x 3.84TB NVMe Gen4',
            bandwidth: '10Gbps / 100TB',
            portSpeed: '10Gbps',
            location: 'id-jkt',
            price: 449.00,
            link: '#'
        },
        {
            id: 'ds-intel-3',
            cpu: 'Intel Xeon Silver 4310',
            cores: 12,
            threads: 24,
            type: 'Intel',
            ram: '96GB DDR4 ECC',
            storage: '12x 16TB HDD',
            bandwidth: '1Gbps Unmetered',
            portSpeed: '1Gbps',
            location: 'de-fra',
            price: 349.00,
            link: '#'
        },
        {
            id: 'ds-amd-3',
            cpu: 'Dual AMD EPYC 7763',
            cores: 128,
            threads: 256,
            type: 'AMD',
            ram: '512GB DDR4 ECC',
            storage: '4x 3.84TB NVMe',
            bandwidth: '25Gbps / 200TB',
            portSpeed: '25Gbps',
            location: 'us-dal',
            price: 899.00,
            link: '#'
        },
        {
            id: 'ds-intel-4',
            cpu: 'Intel Xeon Gold 5218',
            cores: 16,
            threads: 32,
            type: 'Intel',
            ram: '64GB DDR4 ECC',
            storage: '2x 960GB NVMe',
            bandwidth: '10Gbps / 50TB',
            portSpeed: '10Gbps',
            location: 'de-fra',
            price: 199.00,
            link: '#'
        },
        {
            id: 'ds-amd-4',
            cpu: 'AMD EPYC 7402P',
            cores: 24,
            threads: 48,
            type: 'AMD',
            ram: '128GB DDR4 ECC',
            storage: '2x 1.92TB NVMe',
            bandwidth: '10Gbps / 100TB',
            portSpeed: '10Gbps',
            location: 'nl-ams',
            price: 249.00,
            link: '#'
        }
    ]
};
