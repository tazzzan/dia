dia.controller('simpleController', function ($scope) {

    /**model:
     *
     * profile -> profiles []
     *
     * livestream
     *
     * topic -> topics []
     *
     * background -> backgrounds []
     *
     * vote -> votes []
     *
     *      voteOption -> voteOptions []
     *
     * comment -> comments []
     *
     * message -> messages []
     *
     * media
     *
     * image
     *
     * video
     *
     **/

    $scope.profile = {};
    $scope.profiles = [];

    $scope.livestream = {};

    $scope.topic = {};
    $scope.firstLevelTopic = {};
    $scope.secondLevelTopic = {};
    $scope.thirdLevelTopic = {};
    $scope.topics = [];


    $scope.background = {};
    $scope.backgroundSource = {};
    $scope.backgrounds = [];

    $scope.vote = {};
    $scope.userVote = {};
    $scope.commentVote = {};
    $scope.topicVote = {};
    $scope.backgroundVote = {};
    $scope.votes = [];

    $scope.voteOption = {};
    $scope.voteOptions = [];

    $scope.comment = {};
    $scope.topicComment = {};
    $scope.backgroundComment = {};
    $scope.commentComment = {};
    $scope.comments = [];

    $scope.message = {};
    $scope.spectrumMessage = {};
    $scope.privateMessage = {};
    $scope.messages = [];

    $scope.media = {};
    $scope.image = {};
    $scope.video = {};


    // ui_variables

    $scope.indextopic = 0;
    $scope.topictopic = {};
    $scope.selectedTopic = new Topic();

    $scope.selectedName = $scope.profile[0];
    $scope.articleTopic = "";

    $scope.query = "";
    $scope.profileName = "";
    $scope.profileUni = "";

    $scope.topicindex = 0;
    $scope.commentarrow = {};
    $scope.commentarrow.status = true;

    $scope.commentAdded = "";


    // Model Constructors

    function Profile(name, uni) {
        this.name = name;
        this.uni = uni;
    }

    function Topic(name, owner, vts, voteOptions) {
        this.name = name;
        this.owner = owner;
        this.vts = vts;
        this.voteOptions = voteOptions;
        this.pic = src = "img/merkel.jpg";
        this.comments = [];
        this.idInLiveStream = 0;
        this.backgrounds = [];
    }


    function VoteOption(name) {
        this.voteOption = name;
    }

    function Message(text, receiver) {
        this.text = text;
        this.receiver = receiver;
    }


    function Background(text) {
        this.text = text;
    }

    function Commentarrow(id) {
        this.id = id;
        this.status = true;
    }

    function Comment(text, topic) {
        this.text = text;
        this.topic = topic;
    }

    // Functions

    $scope.fillMessages = function () {
        $scope.messages.push(
            $scope.message1 = new Message("Hey, whazzup?", {name: 'Danny', uni: 'Fuwa'}),
            $scope.message2 = new Message("Catch u later", {name: 'Nico', uni: 'Schma'}),
            $scope.message3 = new Message("Alright", {name: 'Chris', uni: 'Schma'}),
            $scope.message4 = new Message("Wonderful day", {name: 'James', uni: 'Schma'}),
            $scope.message5 = new Message("Haha", {name: 'Julia', uni: 'Schma'}),
            $scope.message6 = new Message("You go to uni tmr?", {name: 'Bob', uni: 'Schma'}),
            $scope.message7 = new Message("Exercise?", {name: 'Thomas', uni: 'Schma'})
        )
    };



    $scope.fillVoteOptions = function () {

        $scope.voteOptions.push(
            $scope.option1 = new VoteOption("Yes"),
            $scope.option2 = new VoteOption("No")
        )
    };


    $scope.fillBackgrounds = function () {

        $scope.backgrounds.push(
            $scope.background1 = new Background("Google Source"),
            $scope.background2 = new Background("Google Source"),
            $scope.background3 = new Background("Bing Source"),
            $scope.background4 = new Background("Wikipedia Source"),
            $scope.background5 = new Background("Google Source"),
            $scope.background6 = new Background("BBC Source"),
            $scope.background7 = new Background("Google Source")
        )
    };

    $scope.fillComments = function (){
        for (var i=0; i<$scope.topics.length; i++) {
            $scope.topics[i].comments.push(
                $scope.comment1 = new Comment("Nice, I like it", $scope.topic),
                $scope.comment2 = new Comment("Ahoi", $scope.topic),
                $scope.comment3 = new Comment("That shit sucks dick", $scope.topic),
                $scope.comment4 = new Comment("Awesome", $scope.topic)
            )
        }
    };

    $scope.addComment = function (text, topic) {
        $scope.topic = topic;
        $scope.topic.comments.push(
            $scope.comment = new Comment(text)
        )
    };

    $scope.fillTopics = function () {

        $scope.topics.push(
            $scope.topic2 = new Topic("Better broadband", "Uta", ['20% pro', '80% contra'], ['Yes', 'No', 'Fuck off']),
            $scope.topic3 = new Topic("No tutions fees anymore!", "Pete", ['10% pro', '90% contra'], ['Yes', 'No', 'Fuck off']),
            $scope.topic4 = new Topic("Coffee for free in Glasgow!", "Ilja", ['60% pro', '40% contra'], ['Yes', 'No', 'Fuck off']),
            $scope.topic5 = new Topic("No trees in Glasgow!", "Ilja", ['10% pro', '90% contra'], ['Yes', 'No', 'Fuck off'])
        );
    };


    $scope.createProfile = function (name, uni) {
        $scope.profiles.push(
            $scope.newProfile = new Profile(name, uni)
        );

    };


    $scope.toggleCommentsSection = function (id) {
        $('.commentsSection-' + id).toggle();
    };

    $scope.toggleCommentAddSection = function (id) {
        $('.commentingArea-' +id).toggle();
    };

    $scope.toggle = function (id) {
        $scope.commentarrow.status = !$scope.commentarrow.status;
    };
});
