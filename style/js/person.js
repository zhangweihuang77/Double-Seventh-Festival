var person = {
	boy: $("#boy"),
	girl:$("#girl"),
	count: 0,
	flower_count: 1,
	around:0,
	walk: function() {
		var self = this;
		this.boy.css("background-position",""+(-151*this.count)+"px,0px");
		(this.count < 3) ? this.count += 1: this.count = 0;
		t = setTimeout(function() {
			self.walk();
		}, 300);
	},
	flower_walk:function(){
		this.boy.css("background","url(style/images/boy-flower.png) no-repeat");
	},
	arounds:function(){
		var self = this;
		this.boy.css("background-position-y",""+(-291*this.around)+"px");
		this.girl.css("background-position-y",""+(-291*this.around)+"px");
		// this.girl.css("background","url(style/images/girl-rotate"+this.around+".png");
		(this.around < 5) ? this.around += 1: clearTimeout(f);
		f = setTimeout(function() {
			self.arounds();
		}, 200);
	},
	move1: function(px, times) {
		this.boy.animate({
			left: px
		}, times, "linear", function() {
			loop.loops();
		});
	},
	move2:function(px,times){
		var self = this;
		this.boy.animate({
			left: px
		}, times, "linear",function(){
			self.move_top();
		});
	},
	move_top:function(){
		this.boy.animate({top:241},2500,"linear");
	},
	into: function() {
		var self = this;
		self.boy.addClass("into");
	},
};