

$(document).ready(function() { 
    var github_feed = "http://github.com/feeds/entropie/commits/entropie.github.com/master?" + Math.random(10000)*11;
    var lastfm_feed = "http://ws.audioscrobbler.com/1.0/user/mictro/recenttracks.rss?" + Math.random(10000)*11;
    $('.github-feed').gFeed( 
        { 
            url: github_feed,
            title: "Recent changes.",
        } 
    ); 
    $('.lastfm-feed').gFeed( 
        { 
            url: lastfm_feed,
            title: "Recent changes.",
        } 
    ); 



});
jQuery(function(){
    $("#flickr").flickr({
        api_key: "10f2a12eaf44ae246dcdfd7fe49c5e8b",
        type:    "search",
        user_id: "84036884@N00",
        per_page: 7,
        thumb_size:     "s"
    });
});
