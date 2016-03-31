Template.beerTileMain.events({
    'click .beer-tile' : function(e){
        e.preventDefault();
        Session.set('modalInfo', this);
        $('#itemModal').modal('show');
    }
});
