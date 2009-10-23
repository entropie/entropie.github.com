

$(document).ready(function() { 
    var app = "https://github.com/entropie.private.actor.atom?token=a8a5cdf7e5c336d47488cd22bffbcec4";
    var app = "http://chneukirchen.org/trivium/index.atom";
    var app = "http://github.com/feeds/entropie/commits/entropie.github.com/master";
    $('.github-feed').gFeed( 
        { 
            url: app,
            title: "Recent changes.",
        } 
    ); 
});
