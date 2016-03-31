
Meteor.startup(function() {
    GoogleMaps.load({key:'AIzaSyCaqNb1s7UmZkLHviutOXmWvIhvMX6304Y'});


});

var mapMarkers = [];

Template.likeMap.helpers({

    mapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(0,0),
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.TERRAIN
            };
        }
    }
});

Template.likeMap.onCreated(function() {
    console.log("modalCreated");
});

Template.likeMap.onRendered(function() {
    console.log("modalRendered");
});

Template.modalItem.events({
    "shown.bs.modal": function(e){
        e.stopPropagation();
        e.preventDefault();

        SetupMap();
    },

    "hidden.bs.modal": function(e){
        Session.set('modalInfo','');
    }
});

SetupMap = function(){
    console.log("MapSetup");
    var item = Session.get('modalInfo');
    var brewery = item;

    if(item.breweryId != null){
        brewery = Breweries.findOne(item.breweryId);
    }

    var map = GoogleMaps.maps.likesMap.instance;

    google.maps.event.trigger(map, "resize");
    map.setCenter(new google.maps.LatLng(brewery.AddressLat, brewery.AddressLng));

    MakeMarkers();
};


var ClearMarkers = function(){
    for (var i = 0; i < mapMarkers.length; i++) {
        mapMarkers[i].setMap(null);
    }
    mapMarkers = [];
};

var MakeCenterMarker = function(brewery){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(brewery.AddressLat, brewery.AddressLng),
        map: GoogleMaps.maps.likesMap.instance
    });
    mapMarkers.push(marker);
};



MakeMarkers = function(){
    var item = Session.get('modalInfo');
    var brewery = item;
    if(item.breweryId != null){
        brewery = Breweries.findOne(item.breweryId);
    }
    ClearMarkers();
    MakeCenterMarker(brewery);

    var likes = Likes.find({parentId:item._id});

    likes.forEach(function(like){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(like.Lat, like.Lng),
            map: GoogleMaps.maps.likesMap.instance,
            opacity: .8
        });
        mapMarkers.push(marker);
    });
};