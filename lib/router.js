Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});


Router.route('/', {
    name: 'tileList',
    waitOn: function(){
        return [Meteor.subscribe('beers'), Meteor.subscribe('breweries'), Meteor.subscribe('comments'), Meteor.subscribe('likes')];
    },
    data: function(){
        var marketList = Beers.find().fetch().concat(Breweries.find().fetch());
        marketList = _.sortBy(marketList, function(item){return item.Name});
        Session.set('marketList', marketList);

        return{
            beers: Beers.find(),
            breweries: Breweries.find(),
            marketList: marketList,
            comments: Comments.find(),
            likes: Likes.find()
        }
    }
});

