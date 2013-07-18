function AsyncCommand(com,o,fn,params,e) {
	this.com = com;
	this.o = o;
	this.fn = fn;
	this.p = params;
	this.p.push(this);
	this.e = e;
}

//definition start
AsyncCommand.prototype = {
execute:function(){
    //////console.log("async execute");
	//call
	this.fn.apply(this.o,this.p);
},
publish:function(){
	//////console.log("async publish " + this.e);
    //next
    this.com.next.apply(this.com,[]);
},
subscribe:function(event,cb){
	//////console.log("async complete " + this.e);
},
};
//definition end