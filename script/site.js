var github_feed = "http://github.com/feeds/entropie/commits/entropie.github.com/master"+ "?" + Math.random(10000)*11;
var lastfm_feed = "http://ws.audioscrobbler.com/1.0/user/mictro/recenttracks.rss"+ "?" + Math.random(10000)*11;
var twitter_feed = "http://twitter.com/statuses/user_timeline/7313002.rss";

function mk_feed(url, target){
    $(target).gFeed( 
        { 
            url: url,
            title: $(target).find("a").attr("rel")
        } 
    ); 
}

$(document).ready(function() { 
    mk_feed(lastfm_feed, ".lastfm-feed");
    mk_feed(github_feed, ".github-feed");
    mk_feed(twitter_feed, ".twitter-feed");
    
    $.getJSON("index.json", function(data, status){
        $.each(data["years"], function(i, items){
            $.each(data["years"][i]["months"]["entries"], function(j, jitems){
                $.get("data/"+jitems, function(data){
                    str = "<div class='rounded silver nomargin child'><div>";
                    $("#post_content").append(str + superTextile(data) + "</div></div>");
                });
            });
        });
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
