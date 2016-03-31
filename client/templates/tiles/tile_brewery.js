Template.breweryTile.events({
    'click .brewery-tile': function(e){
        e.preventDefault();
        Session.set('modalInfo', this);
        $('#itemModal').modal('show');
    }
});