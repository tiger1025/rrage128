var legs = Array(10);
var hand = Array(2);
var kick = Array(4);

var legTime = 0;
var handTime = 0;
var attackTime = -1;

var pos = {};
var ogr = {};
var deadimg;

function InitPlayer()
{
	ogr.w = 620*2.0;
	ogr.h = 188*2.0;
	pos.x = 0;
	pos.y = 0;
	pos.n = 1;
	pos.move = false;
	pos.speed = 200;
	pos.sound = LoadAudio("res/sounds/footsteps.mp3");
	pos.sword = LoadAudio("res/sounds/sword.mp3");
	pos.dead = false;

	for(var i=0; i<9; i++) legs[i] = LoadImage("res/img/player/leg"+(i+1)+".png"); // 201x251
	for(var i=0; i<2; i++) hand[i] = LoadImage("res/img/player/hand"+(i+1)+".png"); // 201x251
	for(var i=0; i<4; i++) kick[i] = LoadImage("res/img/player/kick"+(i+1)+".png");
	legs[9] = LoadImage("res/img/player/leg0.png");
	deadimg = LoadImage("res/img/player/dead.png"); // 371
}

function DrawPlayer(f)
{
	var x = pos.x + GetWidth()/2;
	var y = pos.y + GetHeight()/2;

	//SetColor(255,0,0);
	//DrawRect(x-50,y-125,100,125);

	rexSave();
	rexTranslate(x,y);

	//Scale(0.5);
	rx.scale(0.5*pos.n,0.5);
	SetColor(0,0,0,0.4);

	if (!pos.dead)
	{
		FillEllipse(-50,-15,100,30);
		if (attackTime>0)
		{
			var id = Math.trunc(4-attackTime*4);
			DrawImage(kick[id],-90,-270);
			attackTime-=f*10;
		}
		else
		{
			DrawImage(hand[Math.trunc(handTime)],-90,-250);
		}
		if (pos.move){ DrawImage(legs[Math.trunc(legTime)],-100,-250); } else
		{ DrawImage(legs[9],-100,-250); }
	}
	else
	{
		FillEllipse(-100,-20,200,40);
		DrawImage(deadimg,-371/2,-250/2);
	}

	rexRestore();

	pos.move = false;
	m = {};
	m.x = 0;
	m.y = 0;

	if (!pos.dead)
	{
		if (iskey(KEY_A) || iskey(KEY_LEFT)) if (dist(pos.x-f*pos.speed,pos.y)) { pos.x-=f*pos.speed; pos.n = -1; pos.move = true; }
		if (iskey(KEY_D) || iskey(KEY_RIGHT)) if (dist(pos.x+f*pos.speed,pos.y)) { pos.x+=f*pos.speed; pos.n = 1; pos.move = true; }
		if (iskey(KEY_W) || iskey(KEY_UP)) if (dist(pos.x,pos.y-f*pos.speed*0.6)) { pos.y-=f*pos.speed*0.6; pos.move = true; }
		if (iskey(KEY_S) || iskey(KEY_DOWN)) if (dist(pos.x,pos.y+f*pos.speed*0.6)) { pos.y+=f*pos.speed*0.6; pos.move = true; }
		if (iskey(KEY_ENTER)) pos.dead = true;
		if (iskey(KEY_SPACE)) attackTime = 1;
	}

	if (pos.move)
	{
		legTime+=f*12;
		handTime+=f*4;
		if (legTime>8) legTime=0;
		if (handTime>2) handTime=0;
		PlayAudio(pos.sound,true);
	}
	else
	{
		PauseAudio(pos.sound);
	}
}

function keyd(id)
{

}

function keyu(id)
{
	if (id == KEY_SPACE) attack();
}

function attack()
{
	SetAudioVolume(pos.sword,0.4);
	StopAudio(pos.sword);
	console.log("kick");
	PlayAudio(pos.sword,false);
}

function dist(x,y)
{
	var t = ogr.w/ogr.h;
	y-=30;
	//console.log(Math.sqrt(x*x+(y*t)*(y*t)));
	return Math.sqrt(x*x+(y*t)*(y*t))<ogr.w/2;
}