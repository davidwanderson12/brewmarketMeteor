Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

UI.registerHelper('uppercase', function(context, options) {
    if(context)
        return context.toUpperCase();
});


