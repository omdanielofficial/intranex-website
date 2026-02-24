export const sharedHostingConfig = {

    sectionTitle: "Shared Hosting Plans",
    sectionDescription: "Choose the perfect plan for your website. High performance, secure, and affordable.",


    currency: "$",


    plans: [
        {
            id: "starter",
            name: "Starter",
            price: "1.45",
            originalPrice: "2.59",
            discount: "44%",
            renewalPrice: "1.45",
            theme: "gray",
            isBestValue: false,
            badge: null,
            features: [
                "1 GB SSD NVMe",
                "Unlimited Inodes",
                "3 Email Accounts",
                "1 Website",
                "Unlimited Bandwidth",
                "Free .ONLINE Domain",
                "Remote Backup",
                "1X Performance",
                "Essential Features",
            ],
            link: "#"
        },
        {
            id: "super",
            name: "Super",
            price: "3.95",
            originalPrice: "8.06",
            discount: "51%",
            renewalPrice: "3.95",
            theme: "emerald",
            isBestValue: true,
            badge: "Best Value",
            badgeColor: "bg-emerald-500",
            features: [
                "5 GB SSD NVMe",
                "Unlimited Inodes",
                "Unlimited Email Accounts",
                "Unlimited Websites",
                "Unlimited Databases",
                "Unlimited Bandwidth",
                "Free .COM Domain",
                "Remote Backup",
                "2X Performance",
                "Essential & Advanced Features",
            ],
            link: "#"
        },
        {
            id: "monster",
            name: "Monster",
            price: "6.95",
            originalPrice: "16.16",
            discount: "57%",
            renewalPrice: "6.95",
            theme: "amber",
            isBestValue: false,
            badge: "Best Performance",
            badgeColor: "bg-amber-400",
            features: [
                "12 GB SSD NVMe",
                "Unlimited Inodes",
                "Unlimited Email Accounts",
                "Unlimited Websites",
                "Unlimited Databases",
                "Unlimited Bandwidth",
                "Free .COM Domain",
                "Remote Backup",
                "4X Performance",
                "Essential, Advanced & Pro Features",
            ],
            link: "#"
        },
        {
            id: "cloud",
            name: "Cloud Hosting",
            price: "12.95",
            originalPrice: "25.90",
            discount: "50%",
            renewalPrice: "12.95",
            theme: "sky",
            isBestValue: false,
            badge: null,
            buttonText: "View Cloud Plans",
            features: [
                "40 GB SSD NVMe",
                "Unlimited Inodes",
                "Unlimited Email Accounts",
                "Unlimited Websites",
                "Unlimited Databases",
                "Unlimited Bandwidth",
                "Free .CLOUD Domain",
                "Remote Backup",
                "8X Performance",
                "Essential, Advanced & Pro+ Features",
                "Enhanced Security Optimization"
            ],
            link: "#"
        }
    ]
};
