export const resellerHostingConfig = {

    sectionTitle: "Reseller Hosting Plans",
    sectionDescription: "Start your own hosting business with our affordable white label reseller plans. Choose the perfect plan for your needs.",


    currency: "£",


    plans: [
        {
            id: "reseller-economy",
            name: "Economy",
            price: "19.99",
            originalPrice: "39.99",
            discount: "50%",
            renewalPrice: "19.99",
            theme: "emerald",
            isBestValue: false,
            badge: null,
            badgeColor: null,
            features: [
                "Unlimited DirectAdmin Users",
                "250GB NVMe Storage",
                "AMD Ryzen CPU (2 Cores)",
                "4GB DDR5 RAM",
                "Unmetered Bandwidth",
                "White Label Branding",
                "Free Blesta License",
            ],
            link: "#"
        },
        {
            id: "reseller-standard",
            name: "Standard",
            price: "34.99",
            originalPrice: "69.99",
            discount: "50%",
            renewalPrice: "34.99",
            theme: "sky",
            isBestValue: true,
            badge: "Most Popular",
            badgeColor: "bg-sky-500",
            features: [
                "Unlimited DirectAdmin Users",
                "500GB NVMe Storage",
                "AMD Ryzen CPU (4 Cores)",
                "8GB DDR5 RAM",
                "Unmetered Bandwidth",
                "White Label Branding",
                "Free Blesta License",
            ],
            link: "#"
        },
        {
            id: "reseller-premium",
            name: "Premium",
            price: "59.99",
            originalPrice: "119.99",
            discount: "50%",
            renewalPrice: "59.99",
            theme: "purple",
            isBestValue: false,
            badge: null,
            badgeColor: "bg-purple-500",
            features: [
                "Unlimited DirectAdmin Users",
                "1000GB NVMe Storage",
                "AMD Ryzen CPU (6 Cores)",
                "16GB DDR5 RAM",
                "Unmetered Bandwidth",
                "White Label Branding",
                "Free Blesta License",
            ],
            link: "#"
        }
    ],

    addonCpanel: [
        { count: 50, price: "10.00" },
        { count: 100, price: "15.00" },
        { count: 150, price: "20.00" },
        { count: 200, price: "25.00" },
    ]
};
