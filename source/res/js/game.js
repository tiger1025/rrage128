// start engine
var logos = new Array(2);
var menuSound;

function init()
{
	RexInit("game_canvas");
	RexResize(GetScreenWidth(),GetScreenHeight());
	InitKeyboard();
	menuSound = LoadAudio("res/sounds/menu.mp3");
	InitLogos();
	PlayAudio(menuSound,true);
	setInterval("Draw()",20);
	InitPlayer();
	SetAudioVolume(menuSound,0.4);
}

// draw
function Draw()
{
	var f = DeltaTime();
	SetColor(0,0,0);
	//SetAudioVolume(menuSound,0);
	if (iskey(KEY_SPACE)) SetAudioVolume(menuSound,0);
	FillRect(0,0,GetWidth(),GetHeight());
	drawLogo(f);
	if (logoShowed)
	{
		DrawPlayer(f);
	}	
}