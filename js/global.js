/*
window.onload = function() {
//initialiseBlogPosts();
//initialiseProjects();
}
*/

var projectConstants = {
    bannerBase: "images/banners/",
    posterBase: "images/posters/"
};

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

var initialiseGeneral = function () {
    
};

var initialiseHome = function () {
    initialiseProjects();
};

var initialiseAbout = function () {

};

var initialiseContact = function () {

};

var initialiseProjects = function () {
    var i, j, k;
    $.getJSON("js/content.js", function (data) {
        $.each(data.banners, function () {
            var theText = this.text;
            $("#mainHeader ").append("<a href='" + this.link + "' target='_blank'>" + "<img src='" + projectConstants.bannerBase + this.banner + "' title='" + theText + "' alt='" + theText + "' /></a>");
        });

        $.each(data.films, function (i) {
            var theTitle = this.title;
            var thePoster = this.poster;
            var theLink = this.link;
            var currentFilmTitle = "<h2 class='film-title'>" + theTitle + "</h2>";
            var currentFilmImage = "<a href='" + theLink + "' class='film-link' target='_blank'>" + "<img src='" + projectConstants.posterBase + thePoster + "' title='" + theTitle + "' alt='" + theTitle + "' /></a>";
            $("#filmsContent article").append("<div class='film'>" + currentFilmTitle + currentFilmImage + "<h2>Reviews</h2></div>");

            $.each(this.reviews, function () {
                var currentFilmStars = "<span class='stars'>" + this.stars + " Stars</span>";
                var currentFilmText = "<p>&#147;" + this.text + "&#148;</p>";

                var currentFilmReviewer = "<span class='reviewer'>Reviewed by " + this.reviewer + "</span>";

                $(".film").eq(i).append(currentFilmStars + currentFilmText + currentFilmReviewer);
            });
        });
    })
	.success(function () { console.log("Success"); })
	.error(function () { console.log("Error"); })
	.complete(function () { console.log("Complete"); });
};
