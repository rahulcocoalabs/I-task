module.exports = (app,methods,options) => {
    const accounts = methods.loadController('accounts',options);
    accounts.methods.post('/sign-up',accounts.signUp, {auth:false,multer: accounts.getMulter });
    accounts.methods.post('/login',accounts.login, {auth:false});
    accounts.methods.get('/profile',accounts.getProfile, {auth:true});
    accounts.methods.patch('/update-profile',accounts.updateProfile, {auth:true});
    accounts.methods.post('/send-otp',accounts.sendSms, {auth:false});
    accounts.methods.post('/verify-otp',accounts.verifyOtp, {auth:false});
    accounts.methods.patch('/reset-password',accounts.resetPasssword, {auth:false});
    accounts.methods.patch('/change-password',accounts.changePasssword, {auth:true});
    accounts.methods.post('/search',accounts.fullSearch, {auth:true});
    accounts.methods.get('/filter-options',accounts.getFilterOptions, {auth:true});
}