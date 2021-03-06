// start engine
var logos = new Array(2);
var menuSound;
var bg;

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
	bg = LoadImage("res/img/bg/bg1.jpg");
	SetAudioVolume(menuSound,0.4);
	//Scale(0.5);
}

// draw
function Draw()
{
	var f = DeltaTime();
	SetColor(0,0,0);
	//SetAudioVolume(menuSound,0);
	//if (iskey(KEY_SPACE)) SetAudioVolume(menuSound,0);
	FillRect(0,0,GetWidth(),GetHeight());
	drawLogo(f);
	
	if (logoShowed)
	{
		rexSave();
		rexTranslate(GetWidth()/2-980,GetHeight()/2-850);
		Scale(2,2);
		DrawImage(bg,0,0);
		rexRestore();

		var ogr = {};
		ogr.x = GetWidth()/2;
		ogr.y = GetHeight()/2+30;
		ogr.dx = 620*2;
		ogr.dy = 188*2;		
		SetColor(0,255,0,0.1);
		FillEllipse(ogr.x-ogr.dx/2,ogr.y-ogr.dy/2,ogr.dx,ogr.dy);

		DrawPlayer(f);
	}	
}