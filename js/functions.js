
window.addEventListener('load', function() {
	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
	{
	   document.getElementsByTagName("BODY")[0].className += " safari";
	}
})