Comments = new Mongo.Collection('comments');

Meteor.methods({
    commentInsert: function(commentAttributes){
        check(Meteor.userId(), String);
        check(commentAttributes, {
            parentId: String,
            body: String
        });

        var user = Meteor.user();

        var comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date(),
        });

        Comments.insert(comment);
    }
});