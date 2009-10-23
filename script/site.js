var github_feed = "http://github.com/feeds/entropie/commits/entropie.github.com/master?" + Math.random(10000)*11;
var lastfm_feed = "http://ws.audioscrobbler.com/1.0/user/mictro/recenttracks.rss?" + Math.random(10000)*11;

function mk_feed(url, target){
    $(target).gFeed( 
        { 
            url: url,
            title: $(target).attr("rel")
        } 
    ); 
}

$(document).ready(function() { 
    mk_feed(lastfm_feed, ".lastfm-feed");
    mk_feed(github_feed, ".github-feed");
    
    $.get("data/test.markdown", function(data){
        $("#tmp").html(superTextile(data));
    });
    

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
