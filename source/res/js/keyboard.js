var keys = new Array(256);
function InitKeyboard()
{
	document.onkeydown = OnKeyDown;
	document.onkeyup = OnKeyUp;
}

function OnKeyDown(e) { var charCode = (typeof e.which == "number") ? e.which : e.keyCode; keys[charCode] = true; keyd(charCode); }
function OnKeyUp(e) { var charCode = (typeof e.which == "number") ? e.which : e.keyCode; keys[charCode] = false; keyu(charCode); }

function iskey(num)
{
	return keys[num];
}