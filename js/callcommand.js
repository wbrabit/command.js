function CallCommand(com,o,fn,params) {
	this.com = com;
	this.o = o;
	this.fn = fn;
	this.p = params;
	this.construct();
}

//definition start
CallCommand.prototype = {
construct:function(){
	//////console.log("construct");
},
execute:function(){
    //////console.log("call execute");
    
    //call
    this.fn.apply(this.o,this.p);
    
    //next
    this.com.next.apply(this.com,[]);
    
//    //dispatch event
//    var oDispacher = new Dispacher();
//    oDispacher.dispache("command_complete");
    
//    var e = document.createEvent("MutationEvents");
//    e.command = this.com;
//    e.initEvent("commandcomplete", true, false);
//    this.o.dispatchEvent(e);
},
};
//definition end