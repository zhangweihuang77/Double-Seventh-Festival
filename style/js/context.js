var context ={
	con:$(".bg"),
	move:function(px,times){
		this.con.animate({left: -px},times,"linear", function() {
			loop.loops();
		});
	},
};