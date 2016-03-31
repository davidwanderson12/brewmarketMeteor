
Template.searchOptions.events({
    "click #filter_item_all": function(e){
        Session.set('filterItem', "all");
        setMarketList();
    },
    "click #filter_item_beer": function(e){
        Session.set('filterItem', "beer");
        setMarketList();
    },
    "click #filter_item_brewery": function(e){
        Session.set('filterItem', "brewery");
        setMarketList();
    },
    "click #filter_style_all": function(e){
        Session.set('filterType', "all");
        setMarketList();
    },
    "click #filter_style_ipa": function(e){
        Session.set('filterType', "IPA");
        setMarketList();
    },
    "click #filter_style_paleAle": function(e){
        Session.set('filterType', "Pale Ale");
        setMarketList();
    },
    "click #filter_style_amber": function(e){
        Session.set('filterType', "Amber");
        setMarketList();
    },
    "click #filter_style_stout": function(e){
        Session.set('filterType', "Stout");
        setMarketList();
    },
    "click #filter_style_other": function(e){
        Session.set('filterType', "Other");
        setMarketList();
    }
});

var setMarketList = function(){
    var filterItem = Session.get('filterItem');
    var filterType = Session.get('filterType');
    var marketList = [];

    if(filterType == "all" || filterType == undefined){
        switch(filterItem){
            case "all":
                marketList = Beers.find().fetch().concat(Breweries.find().fetch());
                break;

            case "beer":
                marketList = Beers.find().fetch();
                break;

            case "brewery":
                marketList = Breweries.find().fetch();
                break;
        }
    }
    else{
        switch(filterItem){
            case "all":
                var beers = Beers.find({NameStyle: filterType});
                var breweryIds = beers.map(function (beer) {return beer.breweryId;});

                var breweries = Breweries.find({_id: {$in: breweryIds}});
                marketList = beers.fetch().concat(breweries.fetch());
                break;

            case "beer":
                marketList = Beers.find({NameStyle: filterType}).fetch();
                break;

            case "brewery":
                var beers = Beers.find({NameStyle: filterType});
                var breweryIds = beers.map(function (beer) {return beer.breweryId;});

                var breweries = Breweries.find({_id: {$in: breweryIds}});
                marketList = breweries.fetch()
                break;
        }
    }
    marketList = _.sortBy(marketList, function(item){return item.Name});
    Session.set('marketList', marketList);
};