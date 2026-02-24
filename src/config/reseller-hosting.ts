export const resellerHostingConfig = {

    sectionTitle: "Reseller Hosting Plans",
    sectionDescription: "Start your own hosting business with our white-label reseller plans. Powered by NVMe SSD and LiteSpeed.",


    currency: "$",


    plans: [
        {
            id: "starter-reseller",
            name: "Starter Reseller",
            price: "19.99",
            originalPrice: "39.99",
            discount: "50%",
            renewalPrice: "19.99",
            theme: "emerald",
            isBestValue: false,
            badge: null,
            badgeColor: null,
            features: [
                "50 cPanel Accounts",
                "100 GB NVMe Storage",
                "Unlimited Bandwidth",
                "Unlimited Email Accounts",
                "Free WHMCS License",
                "Free SSL Certificates",
                "White Label cPanel",
                "Private Nameservers",
                "Daily Remote Backups",
                "24/7 Priority Support"
            ],
            link: "#"
        },
        {
            id: "growth-reseller",
            name: "Growth Reseller",
            price: "34.99",
            originalPrice: "69.99",
            discount: "50%",
            renewalPrice: "34.99",
            theme: "sky",
            isBestValue: true,
            badge: "Most Popular",
            badgeColor: "bg-sky-500",
            features: [
                "100 cPanel Accounts",
                "250 GB NVMe Storage",
                "Unlimited Bandwidth",
                "Unlimited Email Accounts",
                "Free WHMCS License",
                "Free SSL Certificates",
                "White Label cPanel",
                "Private Nameservers",
                "Daily Remote Backups",
                "24/7 Priority Support"
            ],
            link: "#"
        },
        {
            id: "pro-reseller",
            name: "Pro Reseller",
            price: "59.99",
            originalPrice: "119.99",
            discount: "50%",
            renewalPrice: "59.99",
            theme: "purple",
            isBestValue: false,
            badge: "Powerhouse",
            badgeColor: "bg-purple-500",
            features: [
                "200 cPanel Accounts",
                "500 GB NVMe Storage",
                "Unlimited Bandwidth",
                "Unlimited Email Accounts",
                "Free WHMCS License",
                "Free SSL Certificates",
                "White Label cPanel",
                "Private Nameservers",
                "Daily Remote Backups",
                "Dedicated IP Included"
            ],
            link: "#"
        },
        {
            id: "enterprise-reseller",
            name: "Enterprise Reseller",
            price: "89.99",
            originalPrice: "179.99",
            discount: "50%",
            renewalPrice: "89.99",
            theme: "amber",
            isBestValue: false,
            badge: "Maximum Performance",
            badgeColor: "bg-amber-500",
            features: [
                "Unlimited cPanel Accounts",
                "1 TB NVMe Storage",
                "Unlimited Bandwidth",
                "Unlimited Email Accounts",
                "Free WHMCS License",
                "Free SSL Certificates",
                "White Label cPanel",
                "Private Nameservers",
                "Daily Remote Backups",
                "Dedicated IP & Priority Support"
            ],
            link: "#"
        }
    ],

    addonCpanel: [
        { count: 10, price: "3.50" },
        { count: 20, price: "7.00" },
        { count: 30, price: "10.50" },
        { count: 50, price: "17.50" },
        { count: 100, price: "35.00" }
    ]
};
