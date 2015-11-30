var legs = Array(9); // 0..8
var hand = Array(2);
var legTime = 0;
var handTime = 0;

function InitPlayer()
{
	for(var i=0; i<9; i++) legs[i] = LoadImage("res/img/player/leg"+(i+1)+".png"); // 201x251
	for(var i=0; i<2; i++) hand[i] = LoadImage("res/img/player/hand"+(i+1)+".png"); // 201x251
}

function DrawPlayer(f)
{
	var x = 200;
	var y = 300;

	SetColor(255,0,0);

	rexSave();

	Scale(0.5);
	DrawImage(hand[Math.trunc(handTime)],x-90,y-250);
	DrawImage(legs[Math.trunc(legTime)],x-100,y-250);

	legTime+=f*12;
	handTime+=f*4;
	if (legTime>8) legTime=0;
	if (handTime>2) handTime=0;

	rexRestore();
}