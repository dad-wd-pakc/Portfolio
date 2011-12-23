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
        case "blog":
            initialiseGeneral();
            initialiseAbout();
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

var initialiseBlog = function () {

};

var initialiseAbout = function () {

};

var initialiseContact = function () {

};

var initialiseProjects = function () {
    //(function () {
    //alert("It works!");
    //})();

    var i, j, k;

    // The carousel navigation
    var slideButtons = [
	    "<ul class='slide-buttons'>",
		    "<li><a class='prev' href='#'>Previous</a></li>",
		    "<li><a class='next' href='#'>Next</a></li>",
	    "</ul>"
    ].join("");


    $.getJSON("js/content.js", function (data) {
        $.each(data.banners, function () {
            var theText = this.text;
            var bannerImage = "<b><img src='" + projectConstants.bannerBase + this.banner + "' title='" + theText + "' alt='" + theText + "' /></b>";
            var bannerCaption = "<p class='caption'>" + theText + "</p>";
            $(".slides").append("<li class='hero'>" + bannerImage + bannerCaption + "</li>");
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
	.success(function () {
	    // console.log("Success");

	    $(".slides").addClass("slider");

	    $("#mainSlider .hero-slider")
        .wrapInner("<div class='slidewrap'></div>")
	    //.find(".slidewrap")
	    //.append(slideButtons)
        .carousel({
            slide: ".hero"
        });

	    $(".slidecontrols > li").each(function (i, value) {
	        var navIndex = i;
	        var currentNav = $(this);

	        switch (navIndex) {
	            case 0:
	                currentNav
                    .addClass("next-nav")
                    .find("a")
                    .html("&gt;");
	            break;
	            case 1:
	                currentNav
                    .addClass("previous-nav")
                    .find("a")
                    .html("&lt;");
	                break;
	            }
	    });
	})
	.error(function () {
	    // console.log("Error");
	})
	.complete(function () {
	    // console.log("Complete");
	});
};
