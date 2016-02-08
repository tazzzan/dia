
dia.controller('simpleController', function ($scope) {
    $scope.profile = ["Ilja Lichtenberg", "Strathclyde", "25"];
    $scope.selectedName = $scope.profile[0];
    $scope.articleTopic = "";
    $scope.topic = {};


    $scope.addPerson = function () {
        $scope.persons.push(
            {   name:$scope.newPerson.name,
                uni: $scope.newPerson.uni
            });
    };

    $scope.query = "";

    $scope.search = function () {

    };

    function topic(name, owner, vts, comments) {
        this.name = name;
        this.owner = owner;
        this.vts = vts;
        this.pic = src="img/merkel.jpg";
        this.comments = comments;

    }

    $scope.topics = [];
    $scope.fillTopics = function () {

        $scope.topics.push(
            $scope.topic2 = new topic("No boarders","Uta", ['20% pro', '80% contra'], ['Awesome', 'Fucked up', 'Cool']),
            $scope.topic3 = new topic("No student loans anymore!", "Pete", ['10% pro', '90% contra'], ['Shit', 'Thumb up', 'Nice']),
            $scope.topic4 = new topic("Coffee for free in Glasgow!", "Ilja", ['60% pro', '40% contra'], ['Finally', 'Awesome', 'haha'])
        );
    };

    $scope.clickTopic = function () {
        alert("you clicked");
    };

    $scope.clickNewArticle = function () {
        $scope.topics.push({
                name: $scope.articleTopic,
                owner: $scope.selectedName

            });
    };

});
