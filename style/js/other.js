var other = {
	cloud1:$(".cloud1"),
	cloud2:$(".cloud2"),
	door_left:$(".B .left"),
	door_right:$(".B .right"),
	sun:$(".sun"),
	bird:$(".bird"),
	count:0,
	map1:function(){
		this.sun.animate({left:100}, 12000,"linear");
		this.cloud1.animate({left:700}, 7000,"linear");
		this.cloud2.animate({left:-200}, 5000,"linear");
	},
	door_open:function(){
		this.door_left.animate({left:-90},999,"linear");
		this.door_right.animate({left:180},1000,"linear",function(){
			loop.loops();
		});
	},
	door_close:function(){
		this.door_left.animate({left:0},999,"linear");
		this.door_right.animate({left:90},1000,"linear");
	},
	birds:function(){
		var self = this;
		this.bird.css("background-position", ""+(this.count)*-91+"px,0px");
		(this.count < 2) ? this.count += 1: this.count = 1;
		a = setTimeout(function() {
			self.birds();
		}, 300);
	},
	birds_move:function(){
		this.bird.animate({left:-800}, 20000,"linear");
	}
};