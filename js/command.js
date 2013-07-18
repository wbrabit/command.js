function Command() {
	this.index = 0;
	this.commands = [];
    this.cb = null;
    this.construct();
}

//definition start
Command.prototype = {
construct:function(){
//    ////console.log("construct");
},
call:function(o,fn,params){
//    ////console.log("call");
    this.commands.push(new CallCommand(this,o,fn,params));
},
sleep:function(o,i){
//    ////console.log("sleep");
    this.commands.push(new SleepCommand(this,o,i));
},
play:function(o,fn,params,i,e){
//  ////console.log("play");
  this.commands.push(new PlayCommand(this,o,fn,params,i));
},
async:function(o,fn,params,e){
//    ////console.log("async");
    this.commands.push(new AsyncCommand(this,o,fn,params,e));
},
callback:function(o,fn,params){
//	this.cb = fn;
	this.cb = new CallbackCommand(this,o,fn,params);
},
execute:function(){
	//////console.log("command execute ");
	var c = this.commands[this.index];
	if(c){
		c.execute();
	}else{
		this.next();
	}
},
next:function(){
	//////console.log("command next");
	this.index++;
	if(~~this.index >= ~~this.commands.length){
	    //callback
	    if(this.cb !== null){ this.cb.execute(); }
	}else{
		//next command
		var c = this.commands[this.index];
		c.execute();
	}	
},
cancel:function(){
	this.index = this.commands.length;
},
destroy:function(){
	this.index = this.commands.length;
	this.cb = null;
	this.next();
}
};
//definition end