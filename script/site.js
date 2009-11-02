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
        //console.log(typeof  data);
        $.each(data["years"], function(year, items){
          console.log(year);
          $.each(items["months"], function(month, months){
            console.log(month);
            $.each(months, function(day, ddata){
              $.each(ddata, function(k, file){
                $.get("data/"+file, function(data){
                   var date = year + "-" + month + "-" + day;
                   str = "<div class='rounded silver nomargin child'><div rel='" + date + "'>" + date;
                   $("#post_content").append(str + data + "</div></div>");
                  });
                });
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
        per_page: 8,
        thumb_size:     "s"
    });
});
