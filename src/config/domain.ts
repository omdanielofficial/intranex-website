export const domainConfig = {
    currency: "£",

    searchUrl: "https://client.intranex.org/cart.php?a=add&domain=register&query=",

    registerUrl: "https://client.intranex.org/cart.php?a=add&domain=register",
    pricing: [
        { tld: '.com', price: 9.95, renew: 12.95, transfer: 9.95, popular: true },
        { tld: '.net', price: 11.99, renew: 13.99, transfer: 11.99, popular: true },
        { tld: '.org', price: 12.50, renew: 14.50, transfer: 12.50, popular: true },
        { tld: '.io', price: 39.99, renew: 44.99, transfer: 39.99, popular: true },
        { tld: '.shop', price: 2.99, renew: 39.99, transfer: 39.99, popular: true },
        { tld: '.store', price: 3.99, renew: 45.99, transfer: 45.99, popular: false },
        { tld: '.co', price: 23.95, renew: 26.95, transfer: 23.95, popular: false },
        { tld: '.id', price: 14.99, renew: 16.99, transfer: 14.99, popular: false },
        { tld: '.info', price: 4.99, renew: 19.99, transfer: 14.99, popular: false },
        { tld: '.biz', price: 5.99, renew: 17.99, transfer: 15.99, popular: false },
        { tld: '.xyz', price: 1.99, renew: 12.99, transfer: 12.99, popular: false },
        { tld: '.online', price: 0.99, renew: 34.99, transfer: 34.99, popular: false },
        { tld: '.cloud', price: 6.99, renew: 19.99, transfer: 19.99, popular: false },
        { tld: '.tech', price: 4.99, renew: 49.99, transfer: 49.99, popular: false },
        { tld: '.me', price: 8.99, renew: 18.99, transfer: 18.99, popular: false },
        { tld: '.app', price: 14.99, renew: 19.99, transfer: 19.99, popular: false },
        { tld: '.dev', price: 14.99, renew: 19.99, transfer: 19.99, popular: false },
        { tld: '.us', price: 3.99, renew: 8.99, transfer: 8.99, popular: false },
        { tld: '.eu', price: 4.99, renew: 7.99, transfer: 7.99, popular: false },
        { tld: '.uk', price: 5.99, renew: 8.99, transfer: 8.99, popular: false }
    ]
};
