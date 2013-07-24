var publishsubscribe = {};
(function(ps){
	var topics = {}, subscribeUID = -1;
	
	
	ps.publish = function(topic,data){
		if(!topics[topic]){
			return false;
		}
		
		var subscribers = topics[topic], len = subscribers ? subscribers.length : 0;
		while(len--){
			subscribers[len].callback(topic,data);
		}
		return this;
	},
	
	ps.subscribe = function(topic,func){
		if(!topics[topic]){
			topics[topic] = [];
		}
		var token = (++subscribeUID).toString();
		topics[topic].push({
			token : token,
			callback : func
		});		
		return token;
	},
	
	ps.unsubscribe = function(token){
		for(var m in topics){
			if(topics[m]){
				for(var i = 0,j=topics[m].length;i <j;i++){
					if(topics[m][i].token === token){
						topics[m].splice(i,1);
						return token;
					}
				}
			}
		}
		return this;
	}

})(publishsubscribe);