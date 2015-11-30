var logc = 2;
var logos = Array(logc);

var logoTime = 0;
var logoShowed = false;

function InitLogos()
{
	logos[0] = LoadImage("res/img/etc/logo1.png");
	logos[1] = LoadImage("res/img/etc/logo2.jpg");
}


function drawLogo(f)
{
	if (!logoShowed)
	{
	if (logoTime<7.2)
	{
		if (logoTime<3.6)
		{
			DrawImage(logos[0], (GetWidth()-512)/2, (GetHeight()-512)/2);
		}
		else
		{
			DrawImage(logos[1], (GetWidth()-512)/2, (GetHeight()-512)/2);
		}
	}
	else logoShowed = true;
	logoTime += f;
	SetColor(100,100,100);
	DrawText("press 'space' to skip",10,10);
	if (iskey(KEY_SPACE)) logoShowed = true;
	}
}