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

function get_posts(){
    $.ajax({
      type: "GET",
      url: "index.json",
      processData: true,
      dataType: "json",
      success: function(data){
        $.each(data, function(i, entry){
          window.console && console.log(entry["t"]);
          $.ajax({
            url: "data/" + entry["file"],
            success: function(data){
              str = "<div class='rounded silver nomargin child' rel='" + "lal" + "'><div>";
              $("#post_content").append(str + data + "</div></div>");
            },
            complete: function(a,b){
              window.console && console.log(23);
            }
          });
        });
      }
    });
}

$(document).ready(function() {
  get_posts();
  mk_feed(lastfm_feed, ".lastfm-feed");
  mk_feed(github_feed, ".github-feed");
  mk_feed(twitter_feed, ".twitter-feed");
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
