if (Beers.find().count() === 0) {

    Addresses.insert({
        Address1: "2121 N 35th St",
        City: "Seattle",
        State: "WA",
        Zip: "98103",
        Country: "United States",
        Lat: "47.6489562988281",
        Lng: "-122.333061218262"
    });


    var brewery1 = Breweries.insert({
        Name: "21st Amendment",
        AddressStreet1: "563 2nd Street ",
        AddressCity: "San Francisco",
        AddressState: "CA",
        AddressPostCode: "94107",
        AddressCountry: "USA",
        AddressLat: "37.77493",
        AddressLng: "-122.419416",
        LogoImg: "Brewery1",
        TileImg: "breweryTile1",
        Description: "In 2000, Nico Freccia and Shaun O’Sullivan founded the 21st Amendment Brewery in San Francisco’s historic South Park neighborhood.    The popular brewpub is now at the heart of the new city center, just south of the financial district and only two blocks from the San Francisco Giants baseball park.    In addition to eight rotating taps of multiple award-winning hand-crafted house beers, the pub has been voted “Best Brewpub”, “Best Burger” and “Best Happy Hour” by the San Francisco press."
    });
    Breweries.insert({
        Name: "5 Joaquins Craft Cerveza",
        AddressStreet1: null,
        AddressCity: "Sacramento",
        AddressState: "CA",
        AddressPostCode: null,
        AddressCountry: "USA",
        AddressLat: "38.581572",
        AddressLng: "-121.4944",
        LogoImg: "Brewery2",
        TileImg: "breweryTile2",
        Description: null
    });
    var brewery2 = Breweries.insert({
        Name: "Aaron Christensen",
        AddressStreet1: null,
        AddressCity: null,
        AddressState: null,
        AddressPostCode: null,
        AddressCountry: "USA",
        AddressLat: "37.09024",
        AddressLng: "-95.712891",
        LogoImg: "Brewery2",
        TileImg: "breweryTile2",
        Description: null
    });
    Breweries.insert({
        Name: "Alastair Ting",
        AddressStreet1: null,
        AddressCity: null,
        AddressState: null,
        AddressPostCode: null,
        AddressCountry: "USA",
        AddressLat: "37.09024",
        AddressLng: "-95.712891",
        LogoImg: "Brewery1",
        TileImg: "breweryTile1",
        Description: null
    });
    var brewery3 = Breweries.insert({
        Name: "American Homebrewers Association",
        AddressStreet1: null,
        AddressCity: "Boulder",
        AddressState: "CO",
        AddressPostCode: null,
        AddressCountry: "USA",
        AddressLat: "40.014986",
        AddressLng: "-105.270546",
        LogoImg: "Brewery3",
        TileImg: "breweryTile3",
        Description: null
    });
    Breweries.insert({
        Name: "Bad Jimmy's Brewing",
        AddressStreet1: "4358 B Leary Way NW",
        AddressCity: "Seattle",
        AddressState: "WA",
        AddressPostCode: "98107",
        AddressCountry: "USA",
        AddressLat: "47.60621",
        AddressLng: "-122.332071",
        LogoImg: "Brewery3",
        TileImg: "breweryTile3",
        Description: null
    });
    var brewery4 = Breweries.insert({
        Name: "Bainbridge Island Brewing",
        AddressStreet1: "9415 Coppertop Loop",
        AddressCity: "Bainbridge Island",
        AddressState: "WA",
        AddressPostCode: "98110",
        AddressCountry: "USA",
        AddressLat: "47.60621",
        AddressLng: "-122.332071",
        LogoImg: "Brewery4",
        TileImg: "breweryTile4",
        Description: "Making a great beer requires a combination of art and science. Science, in knowing what the gear and the ingredients can do. Art, in imagining what beer can be. Whether it's excellent versions of classic styles, or boundary pushing experimental brews, we strive to blend the art and science of beer.    But beer is also a social beverage. The pub is part of our culture, and here in the Northwest that means locally brewed craft beer. The local brewery is part of the fabric of the community, giving it character, individuality, and indeed, an air of hometown pride. Bainbridge Island is certainly a great place to live, but it's been lacking one thing: our own craft microbrewery. Well, no longer! Bainbridge Island Brewing is the island's brewery, and the island is as much a part of us as we are of it."
    });
    Breweries.insert({
        Name: "Barbarian Brewing",
        AddressStreet1: "5270 Chinden Blvd",
        AddressCity: "Garden City",
        AddressState: "ID",
        AddressPostCode: "83714",
        AddressCountry: "USA",
        AddressLat: "43.622111",
        AddressLng: "-116.238174",
        LogoImg: "Brewery2",
        TileImg: "breweryTile2",
        Description: null
    });
    Breweries.insert({
        Name: "Bayou Teche Brewing",
        AddressStreet1: "1106 Bushville Hwy.",
        AddressCity: "Arnaudville",
        AddressState: "LA",
        AddressPostCode: "70512",
        AddressCountry: "USA",
        AddressLat: "30.39019",
        AddressLng: "-91.926108",
        LogoImg: "Brewery3",
        TileImg: "breweryTile3",
        Description: "Bayou Teche Brewing was founded on this simple dream – to craft beers that compliment the cuisine and lifestyle of Cajuns and Creoles.  With that mission, the Knott brothers decided on St. Patrick’s Day in 2009 to convert a discarded rail road car into a farmhouse brewery.    Years ago, when the French-speaking, agrarian residents of Acadiana needed to put up a barn or similar building they would throw a coup de main.  Inviting friends and relatives over to help with the arduous task, everyone’s shared labor would be repaid with a large communal meal.  Thanks to well-fed (and sometimes inebriated) volunteers and as a nod to the Cajun aesthetic and heritage, the tiny hand built brewery now resembles a traditional Acadian style home – complete with a tasting porch.    Today, in that converted old rail car near the banks of the Bayou Teche, innovative ales are being crafted true to the brewers’ original intent – beers that compliment the unique foods and lifestyles of South Louisiana."
    });
    Breweries.insert({
        Name: "Beer Army Foundation",
        AddressStreet1: null,
        AddressCity: "New Bern",
        AddressState: "NC",
        AddressPostCode: null,
        AddressCountry: "USA",
        AddressLat: "35.108493",
        AddressLng: "-77.044114",
        LogoImg: "Brewery1",
        TileImg: "breweryTile1",
        Description: null
    });

    Beers.insert({
        Name: "Kommuter Kolsch",
        Style: "Kolsch-style Ale",
        NameStyle: "Pale Ale",
        ABV: "5",
        IBU: "20",
        Grains: "German Pilsner, Vienna, Carahell, Saurermalz",
        Hops: "Sterling",
        Description: "A spectre haunts Bainbridge Island, the spectre of Kolsch! Thousands of people each day ride the ferry to and from Seattle. Kommuter Kolsch is our gift to those grim, huddled masses, straining under the yoke of 35 minutes spent drinking coffee, checking their email, chatting with associates, and enjoying the view. Victory to the Ferry-tariat!",
        LogoImg: "Brewery1",
        TileImg: "beerTile1",
        breweryId: brewery1
    });
    Beers.insert({
        Name: "Late Nite Blonde",
        Style: "Kolsch-style Ale",
        NameStyle: "Pale Ale",
        ABV: "9",
        IBU: "0",
        Grains: "",
        Hops: "",
        Description: "Blonde, Beautiful and Sexy! Late Nite Blonde is a light bodied Kolsh style ale that will delight even the most descerning taste buds. Be careful with this one she will knock your socks off with an astounding",
        LogoImg: "Brewery1",
        TileImg: "beerTile2",
        breweryId: brewery1
    });
    Beers.insert({
        Name: "Sticky Ricky",
        Style: "TBD",
        NameStyle: "Other",
        ABV: "5.9",
        IBU: "0",
        Grains: "",
        Hops: "",
        Description: "Don't be fooled by Ricky's dark carmel color. Sticky Ricky was originally named Tricky Ricky due the dark carmel colors but light in body mouth feel. Our Brew Master wanted to surprise people when they tried it. Smooth? Yes! Heavy? No! Bursting with flavors of vanilla, coffee and cocoa. Sticky Ricky is one of our smoothest beers.",
        LogoImg: "Brewery1",
        TileImg: "beerTile3",
        breweryId: brewery1
    });
    Beers.insert({
        Name: "Grumpy Pants Ale",
        Style: "West Coast Style Ale",
        NameStyle: "Pale Ale",
        ABV: "6.8",
        IBU: "0",
        Grains: "",
        Hops: "",
        Description: "Introducing Big Sexy's Grumpy Pants Ale or GPA for short!! GPA is a smooth tasting West Coast Style Ale with a sweet finish. We use three different varieties of local hops for this masterpiece. Craft beer fans will appreciate the complexity and consistency of this winner.",
        LogoImg: "Brewery2",
        TileImg: "beerTile1",
        breweryId: brewery2
    });
    Beers.insert({
        Name: "The Authoritah!",
        Style: "American Red Ale",
        NameStyle: "Amber",
        ABV: "7.2",
        IBU: "120",
        Grains: "",
        Hops: "",
        Description: "The Authoritah's deep red color gives an authoratative maltiness that really stands up to the unique blend of high-alpha American hops. It's like a bigger version of our Aldo's Red but with an assertive amount of of hops like that of an IPA.",
        LogoImg: "Brewery2",
        TileImg: "beerTile2",
        breweryId: brewery2
    });
    Beers.insert({
        Name: "Vanilla in 'Yo-Rye",
        Style: "Rye Stout",
        NameStyle: "Stout",
        ABV: "7",
        IBU: "45",
        Grains: "",
        Hops: "",
        Description: "Rickoli’s Rye Stout spiked with pure Vanilla. The heartiness of this very approachable stout is balanced and softened with pure Mexican vanilla.",
        LogoImg: "Brewery3",
        TileImg: "beerTile1",
        breweryId: brewery3
    });
    Beers.insert({
        Name: "Hop Session",
        Style: "Session IPA",
        NameStyle: "IPA",
        ABV: "5",
        IBU: "65",
        Grains: "",
        Hops: "",
        Description: "Where mild meets wild! Mild on alcohol, but still drinks like our IPA. A more complex hop profile than our bigger beers, Hop Session gives your senses a Wild Ride!",
        LogoImg: "Brewery3",
        TileImg: "beerTile2",
        breweryId: brewery3
    });
    Beers.insert({
        Name: "Barbarian Red Ale",
        Style: "Red Ale",
        NameStyle: "Amber",
        ABV: "6.5",
        IBU: "30",
        Grains: "",
        Hops: "",
        Description: "When we set out to brew beer, we vowed to never settle on brewing average beers, like so many on the market. Our Red Ale's color is the product of caramelized malt; the fresh aroma--a product of the three different hops we use. The pleasure of drinking this one-of-a-kind beer, made in Peru, is all yours!",
        LogoImg: "Brewery3",
        TileImg: "beerTile3",
        breweryId: brewery3
    });
    Beers.insert({
        Name: "Matador",
        Style: "Imperial Dark Rye",
        NameStyle: "Other",
        ABV: "10.1",
        IBU: "0",
        Grains: "2-Row, CaraMunich, Rye Malt, Chocolate Rye Malt",
        Hops: "Columbus, Saaz, Styrian Goldings, Hallertauer",
        Description: "",
        LogoImg: "Brewery3",
        TileImg: "beerTile4",
        breweryId: brewery3
    });
    Beers.insert({
        Name: "Smashbomb Atomic IPA",
        Style: "IPA",
        NameStyle: "IPA",
        ABV: "7",
        IBU: "72",
        Grains: "Pale Malt, Weyerman’s Munich Type II, Weyerman’s Melanoidin Malt, Great Western Crystal 60",
        Hops: "Citra, Centennial, Cascade",
        Description: "Exploding onto the Ontario Craft Beer scene as our province’s first real hop-forward IPA, Smashbomb Atomic represents our maniacal tests in assaulting a beer with Hops at every possible stage of the brewing process.    Flaring with a barely controlled concoction of Citra, Centennial, and Cascade hops, we give warning: this brew’s fallout ruins you for lamer beers.",
        LogoImg: "Brewery4",
        TileImg: "beerTile1",
        breweryId: brewery4
    });
}
