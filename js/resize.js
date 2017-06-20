$(#stage).resize(function(){
	 canvas.attr("width", $(window).get(0).innerWidth);  
   
        canvas.attr("height", $(window).get(0).innerHeight);  
   
        context.fillRect(0, 0, canvas.width(), canvas.height());  
       window.onload();
});