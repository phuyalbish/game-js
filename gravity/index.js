const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width =  1024;
canvas.height = 576;
const gravity = 0.5;

class Player{
	// let position, velocity,height;
	constructor(position,velocity, color){
		this.position = position;
		this.velocity = velocity;
		this.color = color;
		this.height = 100;
	}

	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x,this.position.y, 100,this.height);
	}
	update() {
		this.draw();
		this.position.x +=this.velocity.x;
		this.position.y +=this.velocity.y;
		if (this.position.y + this.height + this.velocity.y < canvas.height){

			this.velocity.y +=gravity;
		}
		else{
			this.velocity.y = 0;
		}
	}
}


const player = new Player({x:45, y:0},  {x:0, y:1}, "blue");
const player2 = new Player({x:700, y:100}, {x:0, y:1}, "red");
const player3 = new Player({x:400, y:100},{x:0, y:1},  "green");

const keys = {
	d:{pressed:false},
	a:{pressed:false},
}







let y= 100;
function animate(){
	window.requestAnimationFrame(animate);

	c.fillStyle = "white";
	c.fillRect(0,0,canvas.width, canvas.height);
	player.update();
	player2.update();
	player3.update();
	player.velocity.x = 0;
	if(keys.d.pressed){
		player.velocity.x = 1;
	} 
	else if(keys.a.pressed){
		player.velocity.x = -1;
	} 
}

animate();


window.addEventListener('keydown', (event) => { 
	switch(event.key){
	case 'd':
		keys.d.pressed = true;
		player.velocity.x =  1;
		break;
	case 'a':
		keys.a.pressed = true;
		player.velocity.x =  -1;
		break;case 'a':
		player.velocity.x =  -1;
		break;
	case 'w':
		player.velocity.y =  -15;
		break;
	}
});

window.addEventListener('keydown', (event) => { 
	switch(event.key){
	case 'd':
		keys.d.pressed = false;
		break;
	case 'a':
		keys.a.pressed = false;
		break;
	}
});