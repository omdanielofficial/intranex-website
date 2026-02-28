export const sharedHostingConfig = {

    sectionTitle: "Web Hosting Plans",
    sectionDescription: "Choose the perfect plan for your website. All plans offer high performance, security, and affordability.",


    currency: "£",


    plans: [
        {
            id: "start",
            name: "Start",
            price: "1.80",
            originalPrice: "3.21",
            discount: "44%",
            renewalPrice: "1.80",
            theme: "gray",
            isBestValue: false,
            badge: null,
            features: [
                "1 Website",
                "10GB NVMe Storage",
                "1 Email Account",
                "Free Domain (1 Year)",
                "Free SSL Certificates",
                "3 Subdomains",
                "3 MySQL Databases",
                "One-Click Installer",
                "WordPress Supported",
                "Daily Backups",
                "Unmetered Bandwidth",
            ],
            link: "https://client.intranex.org/index.php?rp=/store/web-hosting/start"
        },
        {
            id: "grow",
            name: "Grow",
            price: "4.70",
            originalPrice: "9.59",
            discount: "51%",
            renewalPrice: "4.70",
            theme: "emerald",
            isBestValue: true,
            badge: "Best Value",
            badgeColor: "bg-emerald-500",
            features: [
                "25 Websites",
                "50GB NVMe Storage",
                "50 Email Accounts",
                "Free Domain (1 Year)",
                "Free SSL Certificates",
                "100 Subdomains",
                "100 MySQL Databases",
                "One-Click Installer",
                "WordPress Supported",
                "Daily Backups",
                "Unmetered Bandwidth",
            ],
            link: "https://client.intranex.org/index.php?rp=/store/web-hosting/grow"
        },
        {
            id: "scale",
            name: "Scale",
            price: "11.50",
            originalPrice: "26.74",
            discount: "57%",
            renewalPrice: "11.50",
            theme: "amber",
            isBestValue: false,
            badge: "Recommended",
            badgeColor: "bg-amber-400",
            features: [
                "50 Websites",
                "100GB NVMe Storage",
                "100 Email Accounts",
                "Free Domain (1 Year)",
                "Free SSL Certificates",
                "150 Subdomains",
                "150 MySQL Databases",
                "One-Click Installer",
                "WordPress Supported",
                "Daily Backups",
                "Unmetered Bandwidth",
            ],
            link: "https://client.intranex.org/index.php?rp=/store/web-hosting/scale"
        },
        {
            id: "Advanced",
            name: "Advanced",
            price: "16.20",
            originalPrice: "42.63",
            discount: "62%",
            renewalPrice: "16.20",
            theme: "sky",
            isBestValue: false,
            badge: null,
            features: [
                "75 Websites",
                "150GB NVMe Storage",
                "150 Email Accounts",
                "Free Domain (1 Year)",
                "Free SSL Certificates",
                "Unlimited Subdomains",
                "Unlimited MySQL Databases",
                "One-Click Installer",
                "WordPress Supported",
                "Daily Backups",
                "Unmetered Bandwidth",
            ],
            link: "https://client.intranex.org/index.php?rp=/store/web-hosting/advanced"
        }
    ]
};
