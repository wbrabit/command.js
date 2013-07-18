//function SleepCommand(com,o,i) {
//	this.com = com;
//	this.o = o;
//	this.i = i;	
//    this.construct();
//}
function SleepCommand(com,i) {
	this.com = com;
	this.i = i;	
    this.construct();
}

//definition start
SleepCommand.prototype = {
construct:function(){
//    ////console.log("construct");
},
execute:function(){
    //////console.log("sleep execute");
	var oCommand = this.com;
	var iTime = this.i;
    setTimeout(function(){

      //////console.log("sleep " + iTime);
        //next
    	oCommand.next.apply(oCommand,[]);
    	
//    	//dispatch event
//        var oDispacher = new Dispacher();
//        oDispacher.dispache("command_complete");

//        ////console.log("sleep end" + time);
//        var e = document.createEvent("MutationEvents");
//        e.command = this.com;
//        e.initEvent("commandcomplete", true, false);
//        dispatchEvent(e);
//        ////console.log("sleep end");
    },iTime);
},
};
//definition end