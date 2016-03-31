Template.likesPanel.events({
    "click #like": function(e, template){
        e.preventDefault();
        e.stopPropagation();

        var like = {
            parentId: template.data._id
        };

        Meteor.call('likeInsert', like, function(error, likeId) {
            if (error){
                alert(error.reason);
            }
        });
        MakeMarkers();
    },

    "click #unlike": function(e, template){
        e.preventDefault();
        e.stopPropagation();

        var like = {
            parentId: template.data._id
        };

        Meteor.call('likeRemove', like, function(error, likeId) {
            if (error){
                alert(error.reason);
            }
        });
        MakeMarkers();
    }
});

Template.likesPanel.helpers({
    totalLikes: function(){
        var likes = Likes.find({parentId: this._id});
        likes.observeChanges({
            added: function(id,fields){
                MakeMarkers();
            },
            removed: function(){
                MakeMarkers();
            }
        });
        return likes.count();
    },
    userLiked: function(){
        return Likes.find({parentId: this._id, userId: Meteor.userId()}).count() > 0;
    }
})