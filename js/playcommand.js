function PlayCommand(com,o,fn,params,time) {
	this.com = com;
	this.o = o;
	this.fn = fn;
	this.p = params;
	this.i = time;
	this.construct();
}

//definition start
PlayCommand.prototype = {
construct:function(){
	//////console.log("construct");
},
execute:function(){
    //////console.log("call execute");
	var oCommand = this.com;
	var iTime = this.i;
	
    //call
    this.fn.apply(this.o,this.p);
    
    //next
    setTimeout(function(){oCommand.next.apply(oCommand,[]);},iTime);
},
};
//definition end