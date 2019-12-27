let dataSet = {
    locations:[
        {address: "Empire State Building",location: {lat: 40.7484405, lng: -73.98566439999999}},
        {address: "Brooklyn Bridge",location: {lat: 40.7060855, lng: -73.9968643}},
        {address: "Central Park",location: {lat: 45.1020814, lng: -93.4320527}},
        {address: "The Statue of Liberty",location: {lat: 40.6892494, lng: -74.04450039999999}},
        {address: "Hudson Yards",location: {lat: 40.7527246, lng: -74.0016428}},
        {address: "One World Observatory",location: {lat: 40.7133444, lng: -74.0133677}},
        {address: "The Metropolitan Museum of Art",location: {lat: 40.7794366, lng: -73.963244}},
        {address: "Chrysler Building",location: {lat: 40.7516208, lng: -73.97550199999999}},
        {address: "The High Line",location: {lat: 41.2594433, lng: -95.94614849999999}},
        {address: "Theater Broadway",location: {lat: 40.795385, lng: -124.1744844}},
        {address: "The 9/11 Memorial and Museum",location: {lat: 40.7114743, lng: -74.0134432}},
        {address: "Rockefeller Center",location: {lat: 40.7587402, lng: -73.9786736}},
        {address: "Grand Central Terminal",location: {lat: 40.7527262, lng: -73.9772294}},
        {address: "Prospect Park",location: {lat: 29.7327696, lng: -95.4846219}},
        {address: "The Hunters Point Library",location: {lat: 40.7473674, lng: -73.9443355}},
        {address: "Brooklyn Museum",location: {lat: 40.6712062, lng: -73.9636306}},
        {address: "Whitney Museum of American Art",location: {lat: 40.7395877, lng: -74.0088629}},
        {address: "Bronx Zoo Wildlife Conservation Society",location: {lat: 40.8502252, lng: -73.8784993}},
        {address: "Solomon R. Guggenheim Museum",location: {lat: 40.7829796, lng: -73.9589706}},
        {address: "Times Square",location: {lat: 40.758386, lng: -73.9930976}},
        {address: "New York Botanical Garden",location: {lat: 40.8623884, lng: -73.87724779999999}},
        {address: "Prospect Park’s Breeze Hill",location: {lat: 40.6591667, lng: -73.9663889}},
        {address: "Brookfield Place",location: {lat: 40.7127168, lng: -74.01528239999999}},
        {address: "Chelsea Market",location: {lat: 40.7424396, lng: -74.0061439}},
        {address: "Apollo Theater",location: {lat: 41.4286327, lng: -78.56116449999999}},
        {address: "Brooklyn Heights and Brooklyn Promenade",location: {lat: 40.6959294, lng: -73.9955523}},
        {address: "Macy’s Herald Square",location: {lat: 40.7508025, lng: -73.98948349999999}},
        {address: "Brooklyn Botanic Garden",location: {lat: 40.66901, lng: -73.965185}},
        {address: "Coney Island Cyclone",location: {lat: 40.5745217, lng: -73.9776102}},
        {address: "Yankee Stadium",location: {lat: 40.8296426, lng: -73.9261745}},
        {address: "American Museum of Natural History",location: {lat: 40.7813241, lng: -73.9739882}},
        {address: "Union Square",location: {lat: 40.7358633, lng: -73.9910835}},
        {address: "Flatiron Building",location: {lat: 40.7410605, lng: -73.9896986}},
        {address: "The Cloisters",location: {lat: 40.8648628, lng: -73.9317274}},
        {address: "Intrepid Sea, Air & Space Museum",location: {lat: 40.7645266, lng: -73.99960759999999}},
        {address: "Lincoln Center",location: {lat: 39.0527422, lng: -95.69129490000002}},
        {address: "South Street Seaport",location: {lat: 40.7062308, lng: -74.00314449999999}},
        {address: "Museum of Modern Art",location: {lat: 40.7614327, lng: -73.97762159999999}},
        {address: "Radio City Music Hall",location: {lat: 40.75997599999999, lng: -73.9799772}},
        {address: "St. Patrick’s Cathedral",location: {lat: 32.7485241, lng: -97.329385}},
        {address: "New York Public Library",location: {lat: 40.75318230000001, lng: -73.9822534}},
        {address: "Chinatown",location: {lat: 40.7157509, lng: -73.9970307}},
        {address: "Washington Square Park arch",location: {lat: 40.7312339, lng: -73.9971027}},
        {address: "Madison Square Garden",location: {lat: 40.7505045, lng: -73.9934387}},
        {address: "Governors Island",location: {lat: 40.68945009999999, lng: -74.016792}},
        {address: "Socrates Sculpture Park",location: {lat: 40.768479, lng: -73.9366363}},
        {address: "AKC Museum of the Dog",location: {lat: 40.7508184, lng: -73.977554}},
        {address: "Bryant Park",location: {lat: 40.7535965, lng: -73.9832326}}
    ]
};

let locationView = function(data){
    this.address = ko.observable(data.address);
};


let ViewModel = function(){
    let self = this;
    this.$drawer = $('#drawer');
    this.locationList = ko.observableArray([]);
    this.$textInput = $('#search_input');
    this.searchInput = ko.observable("");



    //handle the functionality of toggle drawer part
    this.toggleOpenClass = function (e) {
        self.$drawer.toggleClass("open");
    };
    this.removeOpenClass = function () {
        self.$drawer.removeClass("open");
    };

    //filter the locations
    this.filterLocationArray = ko.pureComputed(function() {

        let value = self.searchInput();
        console.log("**",self.searchInput());

        //todo make the template module work
            dataSet.locations.forEach((data) => {
                self.locationList.push(new locationView(data));
            });

            return self.locationList;


    })
};


ko.applyBindings(new ViewModel());


