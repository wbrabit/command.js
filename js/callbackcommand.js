function CallbackCommand(com,o,fn,params) {
	this.com = com;
	this.o = o;
	this.fn = fn;
	this.p = params;
    this.construct();
}

//definition start
CallbackCommand.prototype = {
construct:function(){
//    ////console.log("construct");
},
execute:function(){
    //////console.log("callback execute");
    //call
	if(this.fn){
		this.fn.apply(this.o,this.p);
	}
},
};
