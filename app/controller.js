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

    $scope.finalVotingResult = {};

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

    function Topic(name, owner, vts) {
        this.name = name;
        this.owner = owner;
        this.vts = vts;
        this.pic = src = "img/merkel.jpg";
        this.idInLiveStream = 0;
        this.comments = [];
        this.backgrounds = [];
        this.votes = [];
        this.finalVotingResults = [];
        this.voteOptions = [];
    }


    function VoteOption(text) {
        this.text = text;
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

    function Vote(voteoption) {
        this.voteOption = voteoption;
    }

    function FinalVotingResult(voteoptionname) {
        this.voteOptionName = voteoptionname;
        this.counter = 0;
    }

    // Functions

    $scope.addFinalVotingResultToTopic = function (voteoptionname, topic) {
        $scope.topic = topic;
        $scope.topic.finalVotingResults.push(
            $scope.finalVotingResult = new FinalVotingResult(voteoptionname)
        )
    }
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
        for (var i = 0; i < $scope.topics.length; i++) {
            $scope.topics[i].voteOptions.push(
                $scope.option1 = new VoteOption("Yes"),
                $scope.option2 = new VoteOption("No"),
                $scope.option3 = new VoteOption("Fuck Off")
            )

            $scope.addFinalVotingResultToTopic($scope.option1.text, $scope.topics[i]);
            $scope.addFinalVotingResultToTopic($scope.option2.text, $scope.topics[i]);
            $scope.addFinalVotingResultToTopic($scope.option3.text, $scope.topics[i]);
        }
    };


    $scope.fillBackgrounds = function () {



        for (var i=0; i<$scope.topics.length; i++) {

            if(i==0){

                $scope.topics[i].backgrounds.push(
                    $scope.background1 = new Background("Google Source"),
                    $scope.background2 = new Background("Google Source"),
                    $scope.background3 = new Background("Bing Source")
                )
            }
            if(i==1){
                $scope.topics[i].backgrounds.push(
                    $scope.background3 = new Background("Bing Source"),
                    $scope.background4 = new Background("Wikipedia Source"),
                    $scope.background5 = new Background("Google Source"),
                    $scope.background6 = new Background("BBC Source")
                )
            }
            if(i==2) {
                $scope.topics[i].backgrounds.push(
                    $scope.background6 = new Background("BBC Source"),
                    $scope.background7 = new Background("Google Source"),
                    $scope.background3 = new Background("Bing Source"),
                    $scope.background4 = new Background("Wikipedia Source")
               )
            }

            if(i==3) {
                $scope.topics[i].backgrounds.push(
                    $scope.background1 = new Background("Google Source"),
                    $scope.background2 = new Background("Google Source"),
                    $scope.background3 = new Background("Bing Source"),
                    $scope.background4 = new Background("Wikipedia Source")
                )
            }

        }
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
            $scope.topic2 = new Topic("Better broadband", "Uta", ['20% pro', '80% contra']),
            $scope.topic3 = new Topic("No tutions fees anymore!", "Pete", ['10% pro', '90% contra']),
            $scope.topic4 = new Topic("Coffee for free in Glasgow!", "Ilja", ['60% pro', '40% contra']),
            $scope.topic5 = new Topic("No trees in Glasgow!", "Ilja", ['10% pro', '90% contra'])
        );
        $scope.selectTopic($scope.topic2);
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

    $scope.selectTopic = function (topic) {
        $scope.selectedTopic = topic;
    };

    $scope.voteOnTopic = function (voteoption, topic) {
        $scope.topic = topic;
        $scope.topic.votes.push(
            $scope.vote = new Vote(voteoption)
        )
        $scope.returnVotingResult($scope.topic);
    };

    $scope.returnVotingResult = function (topic) {

        $scope.topic = topic;

        // first saving 'voteOption.text' of all votes
        // as STRING format in an array

        var votingResults = [];

        for (var i=0; i<topic.votes.length; i++) {
            votingResults.push(
                topic.votes[i].voteOption.text
            )
        }

        // finally creating a result object
        // result = {voteOption1: x; voteOption2: y}


        for(var d=0; d<$scope.topic.finalVotingResults.length; d++) {
            for (var ii=0; ii<votingResults.length; ii++) {

                var voteOptionName = $scope.topic.finalVotingResults[d].voteOptionName;



                if(votingResults[ii]==voteOptionName){
                    $scope.topic.finalVotingResults[d].counter++;
                }

            }
        }
        return $scope.topic.finalVotingResults;

    }

    $scope.giveAlert = function () {
        alert("Fuck!");
    };
    $scope.checkArrayForAttributes = function (array, attribute) {

        if(array.length!=0){
            for(var m=0; m<array.length; m++) {

                if(array[m].hasOwnProperty(attribute)){
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else{
            return false;
        }

    };
});
