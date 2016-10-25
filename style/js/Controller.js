var loop = {
	i: 0,
	loops: function() {
		this.i += 1;
		switch (this.i) {
			case 1:
				person.walk();
				other.map1();
				person.move1(550, 5000);
				break;
			case 2:
				context.move(1000, 6000);
				break;
			case 3:
				other.door_open();
				other.birds_move();
				other.birds();
				break;
			case 4:
				person.into();
				var self = this;
				setTimeout(function() {
					person.flower_walk();
				}, 2000);
				setTimeout(function() {
					self.loops();
				}, 4000);
				break;
			case 5:
				other.door_close();
				person.move2(350, 5000);
				context.move(2000, 8000);
				break;
			case 6:
				clearTimeout(t);
				$("#boy").css("background","url(style/images/boy-rotate.png) no-repeat");
				// $("#girl").css("background","url(style/images/girl-rotate.png) no-repeat");
				setTimeout(function() {
					person.arounds();
				}, 2000);
		}
	}
}
loop.loops();