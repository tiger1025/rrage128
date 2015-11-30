// start engine
var logos = new Array(2);
var menuSound;

function init()
{
	RexInit("game_canvas");
	RexResize(GetScreenWidth(),GetScreenHeight());
	InitKeyboard();
	InitLogos();
	menuSound = LoadAudio("res/sounds/menu.mp3");
	PlayAudio(menuSound,true);
	SetAudioVolume(menuSound,0.5);
	setInterval("Draw()",20);
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
}