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
	DrawImage(legs[Math.trunc(legTime)],10,10);
	DrawImage(hand[Math.trunc(handTime)],20,10);
	legTime+=f*10;
	handTime+=f*4;
	if (legTime>8) legTime=0;
	if (handTime>2) handTime=0;
}