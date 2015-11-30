
	/*
	REX 2D ENGINE (Web version)
	Author: Tiger1025
	Site: http://tiger1025.com/rex
	Version: 0.9
	Update: 11 June 2014
	*/
	
	// Main functions //
	// start //
	function GetKeyClicked() { var c=key; key=0; return c;}
	function GetKeyPressed() { return key; }
	function RexInit(name) { otime=0; if (name==null) { canvas = document.getElementById("rex-canvas"); } else { canvas = document.getElementById(name); } rx = canvas.getContext('2d'); mdtime = GetMilliseconds(); key = 0; document.onkeydown = keyPressed; document.onkeyup = keyDPressed; document.onmousemove = mouseshandler; MouseX = 0; MouseY = 0; }
	function RexResize(width, height) { canvas.width = width; canvas.height = height; }	
	function RexInterval(func,tim) { return setInterval(func,tim); }	
	function SetColor(r,g,b,a) { if (a == null) { SetColor(r,g,b,255); } else { rx.fillStyle = "rgba("+r+","+g+","+b+","+a+")"; rx.strokeStyle = "rgba("+r+","+g+","+b+","+a+")"; }	}
	function DrawLine(x1,y1,x2,y2) {rx.beginPath(); rx.moveTo(x1,y1); rx.lineTo(x2,y2); rx.stroke(); }
	function FillRect(x,y,w,h) { rx.fillRect(x,y,w,h); }
	function DrawRect(x,y,w,h) { rx.strokeRect(x,y,w,h); }
	function ClearRect(x,y,w,h) { rx.clearRect(x,y,w,h); }	
	function DrawEllipse(x,y,w,h,style) { if(rx.ellipse) { rx.save(); rx.beginPath(); rx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2); rx.strokeStyle=style; rx.stroke(); rx.restore(); } }
	function FillEllipse(x,y,w,h,style) { if(rx.ellipse) { rx.save(); rx.beginPath(); rx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2); rx.strokeStyle=style; rx.fill(); rx.restore(); } }	
	function DrawText(text,x,y,size) { if (size!=null) {rx.font=""+size+"px "+fontname; rx.fillText(text,x,y+size); } else { rx.font="12px "+fontname; rx.fillText(text,x,y+12); } }
	function GetWidth() { return canvas.width; }
	function GetHeight() { return canvas.height; }
	function GetScreenWidth() { return document.body.clientWidth; }
	function GetScreenHeight() { return document.body.clientHeight; }	
	function LoadImage(path) { var img = new Image(); img.src = path; return img; }	
	function DrawImage(img,x,y,mode,op) { if ((mode!=null) && (mode)) { var tmp = new Image(); tmp.src = img.src; tmp.onload = function () { rx.drawImage(tmp,x,y); } } else { if (op!=null) img.opacity=op; rx.drawImage(img,x,y); img.opacity=1; } }
	function Random(min, max) { return Math.random()*(max-min)+min; }
	function Max(a,b) { if (a>b) { return a; } else { return b; } }
	function Min(a,b) { if (a<b) { return a; } else { return b; } }
	function GetMilliseconds() { var Today = new Date(); return Today.getMilliseconds()+Today.getSeconds()*1000+Today.getMinutes()*60*1000; }
	function GetSeconds() { var Today = new Date(); return Today.getSeconds(); }	
	function DeltaTime() { var tim = GetMilliseconds(); var old = mdtime; mdtime = tim; fptime=((tim-old)+1)/1000.0; otime+=fptime; return fptime; }
	function GetFPS() { return Math.round(1/fptime); }
	function LoadAudio(path) { var sound = new Audio(); sound.src = path; return sound; }
	function PlayAudio(audio,lp) { if (lp!=null) audio.loop = lp; audio.play(); }
	function PauseAudio(audio) { audio.pause(); }
	function StopAudio(audio) { audio.pause(); audio.currentTime=0; }
	function SetAudioVolume(audio, vol) { audio.volume = vol; }
	function GetMouseX() { return Math.round(MouseX); }
	function GetMouseY() { return Math.round(MouseY); }
	function SetFontName(Name) { fontname = Name; }
	function GetTime() { return otime; }
	function RexClose() { window.close(); }
	function Scale(f) { rx.scale(f,f); }
	function rexRestore() { rx.restore(); }
	function rexSave() { rx.save(); }
	function rexTranslate(x,y) { rx.translate(x,y);  }
	/*
	function GetCheat(n) { if (n!=null) { return cheatext.substring(cheatext.length-n,n+1); } else { return cheatext; } } 
	function IsCheat(text) { if (cheatext.substring(cheatext.length-text.length,text.length+1)==text) { return true; } else { return false; } }
	function ClearCheat() { cheatext = ""; }
	*/
	// end //
	/*tools*/
	function mouseshandler(e) { e = e || window.event; MouseX = e.clientX; MouseY = e.clientY; }
	function keyPressed(e) { if (window.event) { key = window.event.keyCode; } else if (e) { key = e.which; } }
	function keyDPressed(e)
	{
		var tt = cheatext + String.fromCharCode(key);
		cheatext = tt;
		key = 0;
	}
	/*var*/ var rx;	var canvas; var mdtime, otime; var fptime; var key; var MouseX; var MouseY; var fontname = "Arial"; var cheatext = "";
	/*keycodes*/ const KEY_ENTER = 13; const KEY_CTRL = 17; const KEY_SPACE = 32; const KEY_SHIFT = 16; const KEY_ALT = 18; const KEY_UP = 38; const KEY_DOWN = 40; const KEY_LEFT = 37; const KEY_RIGHT = 39; const KEY_ESC = 27; const KEY_BACKSPACE = 8; const KEY_HOME = 36; const KEY_END = 35; const KEY_DEL = 46; const KEY_PAGEUP = 33; const KEY_PAGEDOWN = 34; const KEY_INSERT = 45; const KEY_WIN = 92; const KEY_TAB = 9; const KEY_CAPSLOCK = 20;	const KEY_SCROLLLOCK = 145; const KEY_TILDA = 192; const KEY_0 = 48; const KEY_1 = 49; const KEY_2 = 50; const KEY_3 = 51; const KEY_4 = 52; const KEY_5 = 53; const KEY_6 = 54; const KEY_7 = 55; const KEY_8 = 56; const KEY_9 = 57; const KEY_Q = 81; const KEY_W = 87; const KEY_E = 69; const KEY_R = 82; const KEY_T = 84; const KEY_Y = 89; const KEY_I = 73; const KEY_O = 79; const KEY_P = 80; const KEY_A = 65; const KEY_S = 83; const KEY_D = 68; const KEY_F = 70; const KEY_G = 71; const KEY_H = 72; const KEY_J = 74; const KEY_K = 75; const KEY_L = 76; const KEY_Z = 90; const KEY_X = 88; const KEY_C = 67; const KEY_V = 86; const KEY_B = 66;	const KEY_N = 78; const KEY_M = 77;
	// test3D //
	const maxpoly = 20; var dist = -300;
	var poly_buff = []; var cw,ch; // a,x1,y1,x2,y2,x3,y3,zz,color
	function rex3d_Init(d) 	{ if (d != null) dist=d; cw=GetWidth()/2; ch=GetHeight()/2; for(var i=0; i<maxpoly; i++) { poly_buff[i]=new Array(9); poly_buff[i][0]=false; } }
	function rex3d_DrawPoly(x1,y1,z1,x2,y2,z2,x3,y3,z3) { for (var i = 0; i<maxpoly; i++) if (!poly_buff[i][0]) { poly_buff[i][0] = true;	var zz = 0;		zz = z1+dist; if (zz==0) zz=0.01; poly_buff[i][1]=cw+x1*dist/zz; poly_buff[i][2]=ch-y1*dist/zz;		zz = z2+dist; if (zz==0) zz=0.01; poly_buff[i][3]=cw+x2*dist/zz; poly_buff[i][4]=ch-y2*dist/zz;		zz = z3+dist; if (zz==0) zz=0.01; poly_buff[i][5]=cw+x3*dist/zz; poly_buff[i][6]=ch-y3*dist/zz;		poly_buff[0][7] = (z1+z2+z3)/3; poly_buff[0][8] = rx.fillStyle; break; } }	
	function rex3d_DrawPlane(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4) { rex3d_DrawPoly(x1,y1,z1,x2,y2,z2,x3,y3,z3);	rex3d_DrawPoly(x3,y3,z3,x4,y4,z4,x1,y1,z1); }
	function rex3d_Repaint() { var rf = rx.fillStyle; for (var i=0; i<maxpoly; i++) if (poly_buff[i][0]) { rx.beginPath(); rx.moveTo(poly_buff[i][1],poly_buff[i][2]);	rx.lineTo(poly_buff[i][3],poly_buff[i][4]);	rx.lineTo(poly_buff[i][5],poly_buff[i][6]); rx.closePath();	rx.fillStyle = poly_buff[i][8];	rx.strokeStyle = poly_buff[i][8]; rx.fill(); } rx.fillStyle = rf; }