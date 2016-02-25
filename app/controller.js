

dia.controller('simpleController', function ($scope) {


    $scope.messsage = "hello World";


    $scope.profile = {};
    $scope.profiles = [];

    $scope.livestream = {};

    $scope.topic = {};
    $scope.firstLevelTopic = {};
    $scope.secondLevelTopic = {};
    $scope.thirdLevelTopic = {};

    $scope.background = {};
    $scope.backgroundSource = {};

    $scope.vote = {};
    $scope.userVote = {};
    $scope.commentVote = {};
    $scope.topicVote = {};
    $scope.backgroundVote = {};
    $scope.voteOption = {};

    $scope.comment = {};
    $scope.topicComment = {};
    $scope.backgroundComment = {};
    $scope.commentComment = {};

    $scope.message = {};
    $scope.spectrumMessage = {};
    $scope.privateMessage = {};

    $scope.media = {};
    $scope.image = {};
    $scope.video = {};




    $scope.selectedName = $scope.profile[0];
    $scope.articleTopic = "";

    $scope.query = "";
    $scope.profileName = "";
    $scope.profileUni = "";

    $scope.createProfile = function (name, uni) {
        $scope.profiles.push(
            $scope.newProfile = new Profile(name, uni)
            )

        console.log("blabla: " + $scope.profiles[0].name + $scope.profiles[0].uni + "");
    };

    $scope.showExistingProfiles = function () {
        console.log($scope.profiles[0].name + $scope.profiles[0].uni);
        return $scope.profiles;
    }



    function Profile(name, uni) {
        this.name = name;
        this.uni = uni;
    }

    function Topic(name, owner, vts, voteOptions, comments) {
        this.name = name;
        this.owner = owner;
        this.vts = vts;
        this.voteOptions = voteOptions;
        this.pic = src="img/merkel.jpg";
        this.comments = comments;

    }

    $scope.topics = [];



    function VoteOption(name) {
        this.voteOption = name;
    }

    $scope.voteOptions = [];

    $scope.fillVoteOptions = function () {

        $scope.voteOptions.push(
            $scope.option1 = new VoteOption("Yes"),
            $scope.option2 = new VoteOption("No")
        )
    };


    $scope.fillTopics = function () {

        $scope.topics.push(
            $scope.topic2 = new Topic("No boarders","Uta", ['20% pro', '80% contra'], ['Yes', 'No', 'Fuck off'], ['Shit', 'Thumb up', 'Nice']),
            $scope.topic3 = new Topic("No student loans anymore!", "Pete", ['10% pro', '90% contra'],['Yes', 'No', 'Fuck off'],  ['Shit', 'Thumb up', 'Nice']),
            $scope.topic4 = new Topic("Coffee for free in Glasgow!", "Ilja", ['60% pro', '40% contra'], ['Yes', 'No', 'Fuck off'],  ['Finally', 'Awesome', 'haha']),
            $scope.topic5 = new Topic("No trees in Glasgow!", "Ilja", ['10% pro', '90% contra'],  ['Yes', 'No', 'Fuck off'], ['Hurray', 'Awesome', 'BAD'])

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


    $scope.toggleCommentsSection = function(id) {
        $('#commentsSection-' + id).toggle();
    }


});
