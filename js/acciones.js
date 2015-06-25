
$(document).ready(function(e) {

	 document.addEventListener("deviceready",function(){
    $('#btnvibrar').on('tap',function() {
		navegator.vibrate(1000);
	}); 
}); 

})
