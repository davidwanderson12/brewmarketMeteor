Meteor.publish('beers', function() {
    return Beers.find();
});

Meteor.publish('breweries', function() {
    return Breweries.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});

Meteor.publish('likes', function() {
    return Likes.find();
});