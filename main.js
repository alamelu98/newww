var d=new Date();
function dtime()
{
	
	document.getElementById("date").innerHTML=d.toLocaleDateString();
	document.getElementById("time").innerHTML=d.toLocaleTimeString();
}