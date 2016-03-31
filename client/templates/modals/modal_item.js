
Template.modalItem.helpers({
    isBeer: function(){
        return this.breweryId != null;
    },

    modalInfo: function() {
        return Session.get("modalInfo");
    }
});
