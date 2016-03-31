
Session.set('leavingReply', '');

Template.registerHelper('formatDate', function(date) {
    return new Date(date).toDateString();
});

Template.commentItem.helpers({
    subComment: function(){
        return Comments.find({parentId: this._id});
    },
    leavingReply: function(){
        return Session.get('leavingReply') === this._id;
    }
})

Template.commentItem.events({
    "click .commentReply": function(e){
        e.preventDefault();
        e.stopPropagation();
        
        if(Session.get('leavingReply') === this._id){
            Session.set('leavingReply', '');
        }
        else{
            Session.set('leavingReply', this._id);
        }
    },
    "submit form": function(e, template){
        e.preventDefault();
        e.stopPropagation();

        var comment = {
            body: $(e.target).find('[name=body]').val(),
            parentId: this._id
        };

        if (!comment.body) {
            return alert("Please write some content");
        }

        Meteor.call('commentInsert', comment, function(error, commentId) {
            if (error){
                alert(error.reason);
            } else {
                $(e.target).find('[name=body]').val('');
                Session.set('leavingReply', '');
            }
        });
    }
});