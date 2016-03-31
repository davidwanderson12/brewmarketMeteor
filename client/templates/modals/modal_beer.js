
Template.modalBeer.helpers({
    breweryInfo: function(){
        return Breweries.findOne({_id : this.breweryId});
    }
});

Template.modalBeer.events({
    "click #breweryName" : function(e){
        e.preventDefault();
        Session.set('modalInfo', this);
        setTimeout(function(){
            SetupMap();
        }, 200);

    }
});