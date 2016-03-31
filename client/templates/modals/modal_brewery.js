

Template.modalBrewery.helpers({
    picoPaks: function(){
        return Beers.find({breweryId : this._id});
    }
});

