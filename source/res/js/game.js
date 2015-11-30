// start engine
var logos = new Array(2);
var menuSound;

function init()
{
	RexInit("game_canvas");
	RexResize(GetScreenWidth(),GetScreenHeight());
	InitKeyboard();
	menuSound = LoadAudio("res/sounds/menu.mp3");
	PlayAudio(menuSound);
	SetAudioVolume(menuSound,0);
	setInterval("Draw()",20);
}

// draw
function Draw()
{
	SetColor(0,0,0);
	SetAudioVolume(menuSound,0);
	if (iskey(KEY_SPACE)) SetAudioVolume(menuSound,1);
	FillRect(0,0,GetWidth(),GetHeight());	
}