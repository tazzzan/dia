
dia.controller('simpleController', function ($rootScope, $scope, $state) {

	alert("anything");
		

		$rootScope.isLoggedIn = false;
		
		
		if ($rootScope.isLoggedIn) {
			alert("already logged in");
			
		} 
		else {
			$state.go('login.loginTab');
		}
		
		$scope.goToLogin = function () {
			$state.go('role.seekerAndVoter.start')
		}
		
		
		
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
    $rootScope.profiles = [];

    $rootScope.livestream = {};

    $scope.topic = {};
    $scope.firstLevelTopic = {};
    $scope.secondLevelTopic = {};
    $scope.thirdLevelTopic = {};
    $rootScope.topics = [];


    $scope.background = {};
    $scope.backgroundSource = {};
    $scope.backgrounds = [];

    $scope.vote = {};
    $scope.userVote = {};
    $scope.commentVote = {};
    $scope.topicVote = {};
    $scope.backgroundVote = {};
    $rootScope.votes = [];

    $scope.finalVotingResult = {};

    $scope.voteOption = {};
    $rootScope.voteOptions = [];

    $scope.comment = {};
    $scope.topicComment = {};
    $scope.backgroundComment = {};
    $scope.commentComment = {};
    $rootScope.comments = [];

    $scope.message = {};
    $scope.spectrumMessage = {};
    $scope.privateMessage = {};
    $scope.messages = [];

    $scope.alertNow = function () {
    	alert("hnow");
    }
    
    $scope.media = {};
    $scope.image = {};
    $scope.video = {};

    $scope.filter = {};
    $scope.filters = [];

    // ui_variables
    
    $scope.helloWorld = "helloWorlD2";

    $rootScope.currentProfile = $scope.profile[0];
    $rootScope.watchedProfile = new Profile();
    $rootScope.currentprofile = {};
    $rootScope.currentReceiver = {};

    $rootScope.currentMessageReceiver = new Profile()
    $rootScope.currentMessages = [];
    $rootScope.writtenMessage = "";

    $rootScope.indextopic = 0;
    $rootScope.topictopic = {};
    $rootScope.selectedTopic = new Topic();
    $scope.textTopicDescription =  "Hier kommt dann die Beschreibung rein. Die Schriftgroesse sollte anpassbar sein.Ich hoffe, dass die Texte hier nicht allzu lang werden.";
    $scope.selectedName = $scope.profile[0];
    $scope.articleTopic = "";

    $scope.query = "";
    $scope.typedProfileName = "";
    $scope.profileUni = "";
    $scope.typedName = "";
    $scope.typedUni = "";


    $scope.topicindex = 0;
    $rootScope.commentarrow = {};
    $rootScope.commentarrow.status = true;
    $scope.createTopicadd = {};
    $scope.createTopicadd.status = true;

    $scope.commentAdded = "";

    $scope.topicTitleAdded = "";
    $scope.topicDescriptionAdded = "";
    $scope.topicBackgroundAdded = "";
    $scope.topicOptionsAdded = "";


    // Model Constructors

    function Profile(name, uni) {
        this.name = name;
        this.uni = uni;
        this.messages = [];
    }

    function Topic(name, owner, vts) {
        this.name = name;
        this.owner = owner;
        this.vts = vts;
        this.pic = src = "app/img/merkel.jpg";
        this.idInLiveStream = 0;
        this.description = $scope.textTopicDescription;
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
        this.dateOfSend = Date.now();
    }


    function Background(title, text, source) {
        this.title = title;
        this.text = text;
        this.owner = {};
        this.source = source;
        this.img = {};


    }

    function Commentarrow(id) {
        this.id = id;
        this.status = true;
    }

    function CreateTopicadd() {
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
    	$rootScope.topic = topic;
    	$rootScope.topic.finalVotingResults.push(
            $scope.finalVotingResult = new FinalVotingResult(voteoptionname)
        )
    };

    $scope.fillProfiles = function () {
        $scope.profile10 = $scope.createProfile('Danny', 'Fuwa');
        $scope.profile11 = $scope.createProfile('Nico', 'Schma');
        $scope.profile12 = $scope.createProfile('Chris', 'Mainz');
        $scope.profile13 = $scope.createProfile('James', 'Glasgow College');
        $scope.profile14 = $scope.createProfile('Julia', 'Freiburg');
        $scope.profile15 = $scope.createProfile('Bob', 'Schma');
        $scope.profile16 = $scope.createProfile('Thomas', 'Glasgow Strath');
    }

    $scope.hoho = "";
    $scope.fillMessages = function () {

        $scope.fillProfiles();
     	 $rootScope.currentProfile.messages.push(
        	            $scope.message1 = new Message("Hey, whazzup?",
        	            		$rootScope.profiles[0], $rootScope.currentProfile),
        	            $scope.message2 = new Message("Catch u later",
        	            		$rootScope.profiles[1], $rootScope.currentProfile),
        	            $scope.message3 = new Message("Alright",
        	            		$rootScope.profiles[2], $rootScope.currentProfile),
        	            $scope.message4 = new Message("Wonderful day",
        	            		$rootScope.profiles[3], $rootScope.currentProfile),
        	            $scope.message5 = new Message("Haha",
        	            		$rootScope.profiles[4], $rootScope.currentProfile),
        	            $scope.message6 = new Message("You go to uni tmr?",
        	            		$rootScope.profiles[5], $rootScope.currentProfile),
        	            $scope.message7 = new Message("Exercise?",
        	            		$rootScope.profiles[6], $rootScope.currentProfile)
        	        )
        
        $rootScope.currentMessages = $rootScope.currentProfile.messages;
    };


    $scope.writeMessage = function (text, receiver, sender) {
    	$rootScope.currentProfile.messages.push(
            $scope.newMessage = new Message(text, receiver, sender)
        )
        receiver.messages.push(
            $scope.newMessage
        )
    };


    $scope.fillVoteOptions = function () {
        for (var i = 0; i < $rootScope.topics.length; i++) {
        	$rootScope.topics[i].voteOptions.push(
                $scope.option1 = new VoteOption("Yes"),
                $scope.option2 = new VoteOption("No"),
                $scope.option3 = new VoteOption("IDK")
            )

            $scope.addFinalVotingResultToTopic($scope.option1.text, $rootScope.topics[i]);
            $scope.addFinalVotingResultToTopic($scope.option2.text, $rootScope.topics[i]);
            $scope.addFinalVotingResultToTopic($scope.option3.text, $rootScope.topics[i]);
        }
    };


    $scope.fillBackgrounds = function () {


        for (var i = 0; i < $rootScope.topics.length; i++) {

            if (i == 0) {

            	$rootScope.topics[i].backgrounds.push(
                    $scope.background1 = new Background("UKs high speed broadband",
                        "In UK millions of people don t have the opportunity to have high broadband rates",
                        "Google Source"),
                    $scope.background2 = new Background("No limit on broadband",
                        "We need access to internet all the time so why limit it? ",
                        "Computernews Source"),
                    $scope.background3 = new Background("Why we need internet",
                        "A long time ago .........................",
                        "Bing Source")
                )
            }
            if (i == 1) {
            	$rootScope.topics[i].backgrounds.push(
                    $scope.background1 = new Background("UKs high student fees",
                        "In UK millions of people don t have the money to pay tution fees",
                        "Google Source"),
                    $scope.background2 = new Background("Students protest",
                        "In front of Strathclyde Uni thousands of students stayed at home",
                        "Google Source"),
                    $scope.background3 = new Background("Why we need unis",
                        "Our history begins................",
                        "Bing Source"),
                    $scope.background4 = new Background("Don t want pay", "", "Wikipedia Source"))
            }
            if (i == 2) {
            	$rootScope.topics[i].backgrounds.push(
                    $scope.background6 = new Background("Coffee and Health",
                        "Coffee makes strong and happy. This was shown in the last study",
                        "BBC Source"),
                    $scope.background7 = new Background("Don t feel good after Coffee?",
                        "This medicine might help ....",
                        "Google Source"),
                    $scope.background3 = new Background("Why we need coffe",
                        "A long time ago .........................",
                        "Bing Source"),
                    $scope.background4 = new Background("The best of Coffee",
                        "Why paying for something that makes our ecounomy productive",
                        "Wikipedia Source")
                )
            }

            if (i == 3) {
            	$rootScope.topics[i].backgrounds.push(
                    $scope.background1 = new Background("UKs high student fees",
                        "In UK millions of people don t have the money to pay tution fees",
                        "Google Source"),
                    $scope.background2 = new Background("Students protest",
                        "In front of Strathclyde Uni thousands of students stayed at home",
                        "Google Source"),
                    $scope.background3 = new Background("Why we need unis",
                        "Our history begins................",
                        "Bing Source"),
                    $scope.background4 = new Background("Don t want pay", "", "Wikipedia Source")
                )
            }

        }
    };

    $scope.fillComments = function () {
        for (var i = 0; i < $rootScope.topics.length; i++) {
        	$rootScope.topics[i].comments.push(
                $scope.comment1 = new Comment("Nice, I like it", $scope.topic),
                $scope.comment2 = new Comment("Ahoi", $scope.topic),
                $scope.comment3 = new Comment("That shit sucks dick", $scope.topic),
                $scope.comment4 = new Comment("Awesome", $scope.topic)
            )
        }
    };

    $scope.addComment = function (text, topic) {
    	$rootScope.topic = topic;
    	$rootScope.topic.comments.push(
    			$rootScope.comment = new Comment(text)
        )
    };

    $scope.fillTopics = function () {

        $rootScope.topics.push(
            $scope.topic2 = new Topic("Better broadband", "Uta", ['20% pro', '80% contra']),
            $scope.topic3 = new Topic("No tutions fees anymore!", "Pete", ['10% pro', '90% contra']),
            $scope.topic4 = new Topic("Coffee for free in Glasgow!", "Ilja", ['60% pro', '40% contra']),
            $scope.topic5 = new Topic("No trees in Glasgow!", "Ilja", ['10% pro', '90% contra'])
        );
        $scope.selectTopic($scope.topic2);
    };

    $scope.selectCurrentProfile = function (profile) {

    	$rootScope.currentProfile = profile;
    };

    $scope.selectWatchedProfile = function (profile) {

    	$rootScope.watchedProfile = profile;
    };

    $scope.selectMessageReceiver = function (profile) {
    	$rootScope.currentMessageReceiver = profile;
    };

    $scope.registerProfile = function (name, uni) {

        $scope.newProfile = $scope.createProfile(name, uni);

        $scope.selectCurrentProfile($scope.newProfile);

        return $scope.newProfile;
    };

    $scope.createProfile = function (name, uni) {
        $scope.profiles.push(
            $scope.newProfile = new Profile(name, uni)
        );

        return $scope.newProfile;
    };

    $scope.getProfile = function (profileName) {
        var returnProfile;
        for (i = 0; i < $scope.profiles.length; i++) {
            if ($scope.profiles[i].name == profileName) {
                returnProfile = $scope.profiles[i];
                break;
            }
        }
        return returnProfile;
    };

    $scope.loginProfile = function (name) {
        $scope.profile = $scope.getProfile(name);
        $scope.selectCurrentProfile($scope.profile);
    };


    $scope.toggleCommentsSection = function (id) {
        $('.commentsSection-' + id).toggle();
    };

    $scope.toggleCommentAddSection = function (id) {
        $('.commentingArea-' + id).toggle();
    };

    $scope.toggleCreateTopicArea = function () {
        $scope.createTopicadd.status = !$scope.createTopicadd.status;
    };

    $scope.toggle = function (id) {
    	$rootScope.commentarrow.status = !$rootScope.commentarrow.status;
    };

    $scope.selectTopic = function (topic) {
    	$rootScope.selectedTopic = topic;
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

        for (var i = 0; i < topic.votes.length; i++) {
            votingResults.push(
                topic.votes[i].voteOption.text
            )
        }

        // finally creating a result object
        // result = {voteOption1: x; voteOption2: y}


        for (var d = 0; d < $scope.topic.finalVotingResults.length; d++) {
            for (var ii = 0; ii < votingResults.length; ii++) {

                var voteOptionName = $scope.topic.finalVotingResults[d].voteOptionName;


                if (votingResults[ii] == voteOptionName) {
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

        if (array.length != 0) {
            for (var m = 0; m < array.length; m++) {

                if (array[m].hasOwnProperty(attribute)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }

    };
    $scope.drawChart = function () {
        var myLineChart
    }


    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.checkIfSenderOrReceiver = function () {
        if ($rootScope.currentProfile == $rootScope.currentMessageReceiver) {
            return $rootScope.currentMessageReceiver.name;

        }
        else {
            return "Me";
        }
    };


    //FILTERS

    $scope.filterProfileProperties = function (property) {
        if (property == $scope.messages) {
            return false
        }
        else {
            return true
        }


    }


    $scope.checkReceiverInMessages = function () {
        return function (item) {

            var result = false;

                if (item.receiver == $scope.currentMessageReceiver)
                {
                    result = true;

                }

            return result;
        }

    };


    $scope.addTopic = function (topicTitleAdded, topicDescriptionAdded, topicBackgroundAdded, topicOptionsAdded) {
        $scope.topic = new Topic(topicTitleAdded, $scope.currentProfile.name);
        $scope.topic.description = topicDescriptionAdded;
        $scope.topic.backgrounds.push (
            $scope.background = new Background(topicBackgroundAdded)
        );

        var res = topicOptionsAdded.split(" ");


            for (i=0; i<res.length; i++) {
                $scope.topic.voteOptions.push(
                    $scope.option = new VoteOption(res[i])
                )
            }

        $rootScope.topics.push(
            $scope.topic
        )
    }

    $scope.deleteTopic = function (id) {
        for (i=0; i<$rootScope.topics.length; i++) {
            if ($rootScope.topics[i].idInLiveStream == id){
                $rootScope.topics.splice(i, 1);
            }
        }
    }

});



