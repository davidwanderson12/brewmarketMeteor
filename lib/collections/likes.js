Likes = new Mongo.Collection('likes');

Meteor.methods({
    likeInsert: function(likeAttributes){
        check(Meteor.userId(), String);
        check(likeAttributes, {
            parentId: String
        });

        var user = Meteor.user();
        var userAddress = Addresses.findOne({_id: user.profile.AddressId});


        var like = _.extend(likeAttributes, {
            userId: user._id,
            submitted: new Date(),
            Lat: userAddress.Lat,
            Lng: userAddress.Lng
        });
        Likes.insert(like);
    },

    likeRemove: function(likeAttributes){
        check(Meteor.userId(), String);
        check(likeAttributes, {
            parentId: String
        });

        var user = Meteor.user();

        var like = Likes.findOne({parentId: likeAttributes.parentId, userId: user._id});

        if(like != null){
            Likes.remove({_id: like._id});
        }
    }
});
