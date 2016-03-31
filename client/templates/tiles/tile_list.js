
Template.tileList.helpers({
    isBeer: function(){
        return this.breweryId != null;
    },
    marketList: function(){
        return Session.get('marketList');
    }
});
