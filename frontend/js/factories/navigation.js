myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }, {
        name: "Form",
        classis: "active",
        anchor: "form",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});