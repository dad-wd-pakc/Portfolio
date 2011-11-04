/*
$(document).ready(function() {
	initialiseBlogPosts();
});
*/

window.onload = function() {
	//initialiseBlogPosts();
	//initialiseProjects();
}

var initialiseBlogPosts = function() {

};

var initialiseProjects = function() {
	var i, theReviews, j, k;
	$.getJSON("js/projects.js", function(json) {
		$.each(json.projects, function (i) {
			$("body").append("<p>" + json.projects[i].title + "</p>");
			
			$.each(json.projects[i].reviews, function (i) {
				$("body").append("<p>" + json.projects[i].reviews.text + "</p>");
				theReviews = json.projects[i].reviews;
				console.log(theReviews[i]);
				
				for (j = 0; j < theReviews[j].text[j].length; j++) {
					console.log(theReviews[j].text[]);
				}
				
				//for (j = 0; j < theReviews[i].length; j++) {
					//for (k = 0; k < theReviews[i].text.length; k++) {
						//$("body").append("<p>" + theReviews[i].text + "</p>");
					//}
				//}
			});
		});
	})	
	.success(function() { console.log("Success"); })
	.error(function() { console.log("Error"); })
	.complete(function() { console.log("Complete"); });
};