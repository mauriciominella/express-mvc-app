$(function(){
	$("#signOutButton").click(function(){
		 $.post("/login/signout",{}, function(data){
            if(data=='yes')
              {
                var destinationUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '') + '/';
                window.location.href = destinationUrl;
              }
          });		
	});
});