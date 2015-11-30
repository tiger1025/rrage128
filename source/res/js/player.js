var legs = Array(9); // 0..8
var legTime = 0;

function InitPlayer()
{
	for(var i=0; i<9; i++)
	{
		legs[i] = LoadImage("res/img/player/leg"+(i+1)+".png"); // 201x251
	}
}

function DrawPlayer(f)
{
	DrawImage(legs[Math.trunc(legTime)],10,10);
	legTime+=f*10;
	if (legTime>8) legTime=0;
}