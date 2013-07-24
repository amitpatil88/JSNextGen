var messageLogger  = function(topics, data){
	console.log("Logging " + topics + " : " +data);
};

var subscription = publishsubscribe.subscribe("inbox/newMessage",messageLogger);

publishsubscribe.publish("inbox/newMessage","Hello World new message!");

publishsubscribe.publish("inbox/newMessage",{sender : "amit_patil@persistent.co.in",body : "whats up!!"});


//publishsubscribe.unsubscribe(subscription);

publishsubscribe.publish("inbox/newMessage","Hey, are you still there");