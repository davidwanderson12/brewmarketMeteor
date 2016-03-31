

Accounts.onCreateUser(function(options, user){
    console.log("userCreated");
    var address = Addresses.findOne();
    user.profile = options.profile || {};
    user.profile.AddressId = address._id;
    return user;
});    