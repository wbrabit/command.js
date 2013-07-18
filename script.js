var oCommand = new Command();

//commands
oCommand.call(this,fnCall,["call"]);
oCommand.sleep(1000);
oCommand.play(this,fnPlay,["play"],2000);
oCommand.call(this,fnCall,["call2"]);
oCommand.async(this,fnAsync,["async"],"test");
oCommand.call(this,fnCall,["call3"]);
oCommand.callback(this, fnCallback, ["callback"]);

//execute
oCommand.execute();


function fnCall(p){
	console.log(p);
}

function fnPlay(p){
	console.log(p);
}

function fnAsync(p){
	var aArgs = Array.prototype.slice.call(arguments, 0);
	var oAsync = aArgs.pop();
	setTimeout(function(){
		console.log(p);
		oAsync.publish();
	},3000);
}

function fnCallback(p){
	console.log(p);
}

