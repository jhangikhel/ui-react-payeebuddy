const protectedPages = [{
    name: "User",
    path: "/user"
},
{
    name: "ADS",
    path: "/ads"
}]
const LOGIN_ID = 6;
const ACCOUNT_ID = 1;
const USER_ID = 2;
const ROLE_ID = 3;
const ADS_ID = 4;
const PAYMENT_ID = 5;
const INDEX_ID = 7;
const menupages = [
    { id: ACCOUNT_ID, label: "Account", path: "/account", isProtected:true },
    { id: USER_ID, label: "User", path: "/user", isProtected:true },
    {
        id: ROLE_ID, label: "Role", path: "/role", isProtected:true
    },
    {
        id: ADS_ID, label: "Ads", path: "/ads", isProtected:true
    }, {
        id: PAYMENT_ID, label: "Payment", path: "/payment", isProtected:true
    },
    {
        id: LOGIN_ID, label: "Login", path: "/login", isProtected:false
    },
    {
        id: INDEX_ID, label: "Payee Buddy", path: "/", isProtected:false
    },
];
const getPageName = (pagePath) => {
    const { label } = menupages.find(m => m.path === pagePath);
    console.log("NAMES", label, pagePath);
    return label;
}
export {
    menupages,
    protectedPages,
    ACCOUNT_ID,
    USER_ID,
    ROLE_ID,
    ADS_ID,
    PAYMENT_ID,
    getPageName
}