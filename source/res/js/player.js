var legs = Array(9);
var hand = Array(2);

var legTime = 0;
var handTime = 0;

var pos = {};
var ogr = {};

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
	for(var i=0; i<9; i++) legs[i] = LoadImage("res/img/player/leg"+(i+1)+".png"); // 201x251
	for(var i=0; i<2; i++) hand[i] = LoadImage("res/img/player/hand"+(i+1)+".png"); // 201x251
}

function DrawPlayer(f)
{
	var x = pos.x + GetWidth()/2;
	var y = pos.y + GetHeight()/2;

	//SetColor(255,0,0);
	//DrawRect(x-50,y-125,100,125);
	//SetColor(0,255,0);
	//FillRect(x-4,y-4,8,8);

	rexSave();
	rexTranslate(x,y);

	//Scale(0.5);
	rx.scale(0.5*pos.n,0.5);
	SetColor(0,0,0,0.4);
	FillEllipse(-50,-15,100,30);

	DrawImage(hand[Math.trunc(handTime)],-90,-250);
	DrawImage(legs[Math.trunc(legTime)],-100,-250);

	rexRestore();

	pos.move = false;
	m = {};
	m.x = 0;
	m.y = 0;
	if (iskey(KEY_A)) if (dist(pos.x-f*pos.speed,pos.y)) { pos.x-=f*pos.speed; pos.n = -1; pos.move = true; }
	if (iskey(KEY_D)) if (dist(pos.x+f*pos.speed,pos.y)) { pos.x+=f*pos.speed; pos.n = 1; pos.move = true; }
	if (iskey(KEY_W)) if (dist(pos.x,pos.y-f*pos.speed*0.6)) { pos.y-=f*pos.speed*0.6; pos.move = true; }
	if (iskey(KEY_S)) if (dist(pos.x,pos.y+f*pos.speed*0.6)) { pos.y+=f*pos.speed*0.6; pos.move = true; }

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

function dist(x,y)
{
	var t = ogr.w/ogr.h;
	y-=30;
	console.log(Math.sqrt(x*x+(y*t)*(y*t)));
	return Math.sqrt(x*x+(y*t)*(y*t))<ogr.w/2;
}