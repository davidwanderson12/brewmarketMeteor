Template.commentsPanel.events({
    "submit form": function(e, template){
        e.preventDefault();
        e.stopPropagation();

        var comment = {
            body: $(e.target).find('[name=body]').val(),
            parentId: template.data._id
        };

        if (!comment.body) {
            return alert("Please write some content");
        }

        Meteor.call('commentInsert', comment, function(error, commentId) {
            if (error){
                alert(error.reason);
            } else {
                $(e.target).find('[name=body]').val('')
            }
        });
    }
});

Template.commentsPanel.helpers({
    comment: function(){
        return Comments.find({parentId: this._id});
    }
});