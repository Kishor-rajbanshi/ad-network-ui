console.log('hi this is console');
var mainContent = document.querySelector('.mainContent');
var sidenav = document.querySelector('.sidenav');
var toggleBar = document.querySelector('.toggleBar');
var navicon = document.querySelector('#navicon');
var bell = document.querySelector('.bell');

var headtitle = document.querySelectorAll(".headtitle");


toggleBar.onclick = function(){
	sidenav.classList.toggle('active');
	mainContent.classList.toggle('active');
}

var bellinfo = document.getElementById('bellinfo');
var iconbell = document.getElementById('iconbell');

 function func() {
	if (bellinfo.style.display == 'none') {
		bellinfo.style.display = 'block';
	}
	else if(bellinfo.style.display == 'block')
	{
		bellinfo.style.display = 'none';
	}
}
document.addEventListener('mouseup', function(e) {
	if(wrapper.contains(e.target)){
		bellinfo.style.display = "none";
	}
})



var createCampagin = document.getElementById('createCampagin');
createCampagin.onclick = function(){
	createCampagin.style.display = 'none';
}




var Automatedrules = document.getElementById('Automatedrules');
Automatedrules.onclick = function(){
	Automatedrules.style.height = '100px';
}





var morePayments = document.getElementById('morePayments');
morePayments.onclick = function(){
	var morepayactive = document.getElementById('morepayactive');
	morePayments.classList.toggle('morepayactive');
}