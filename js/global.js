/*
$(document).ready(function() {
	initialiseBlogPosts();
});
*/

window.onload = function() {
	//initialiseBlogPosts();
	initialiseProjects();
}

var initialiseBlogPosts = function() {

};

var initialiseProjects = function() {
	var i = 0;
	$.getJSON("js/projects.js", function(json) {
		$.each(json.projects, function (i) {
			console.log("JSON Data: " + json.projects[i].title);
			
		});
	})	
	.success(function() { console.log("Success"); })
	.error(function() { console.log("Error"); })
	.complete(function() { console.log("Complete"); });
};