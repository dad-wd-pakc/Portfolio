/*
window.onload = function() {
//initialiseBlogPosts();
//initialiseProjects();
}
*/

$(document).ready(function() {
	initialiseTheScripts();
});

var initialiseTheScripts = function () {
    var currentPage = $("body").attr("id");
    switch (currentPage) {
        case "home":
            initialiseGeneral();
            initialiseHome();
            break;
        case "about":
            initialiseGeneral();
            initialiseAbout();
            break;
        case "contact":
            initialiseGeneral();
            initialiseContact();
            break;
        default:
            initialiseGeneral();
    }

};

var intialiseGeneral = function () {
    
};

var initialiseHome = function () {
    initialiseProjects();
};

var initialiseAbout = function () {

};

var initialiseContact = function () {

};

var initialiseProjects = function() {
	var i, theReviews, j, k;
	$.getJSON("js/projects.js", function(json) {
		$.each(json.projects, function (i) {
			$("body").append("<p>" + json.projects[i].title + "</p>");
		});
	})	
	.success(function() { console.log("Success"); })
	.error(function() { console.log("Error"); })
	.complete(function() { console.log("Complete"); });
};
