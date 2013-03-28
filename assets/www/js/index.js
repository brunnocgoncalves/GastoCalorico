// Wait for Cordova to load
//
document.addEventListener("deviceready", function(){
    var parentElement = document.getElementById('deviceready');
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');

	listeningElement.setAttribute('style', 'display:none;');
	receivedElement.setAttribute('style', 'display:block;');
 },true);