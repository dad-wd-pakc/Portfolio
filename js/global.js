/*
$(document).ready(function() {
	initialiseBlogPosts();
	alert("YEAH!");
});
*/

window.onload = function() {
	initialiseBlogPosts();
}

var blogPosts = [
	{
	postTitle: "How to fix a sink plunger in 5 minutes",
	postEntry: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
	categories: ["HowTo", "Sinks", "Plumbing"]
	},
	{
	postTitle: "How to remove a broken lightbulb",
	postEntry: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
	categories: ["HowTo", "Lightbulbs", "Electricity"]
	},
	{
	postTitle: "New associate website",
	postEntry: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
	}
];

var initialiseBlogPosts = function() {
	// Render the blog posts
	$("#blogPostTemplate").tmpl(blogPosts).appendTo("#blogPostContent");
	//$("#blogPostContent").hide();
	
};