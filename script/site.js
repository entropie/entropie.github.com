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

function parse_hash(){
    var str = document.location.hash.substr(1);
    if(str){
        var ret = parseInt(str.match(/^\d+$/));
        if(ret)
            return ret;
        else
            return -1;
    } else {
        return false;
    }
}

function append_postentry(entry){
    var d = Date.parse(entry["t"]);
    var dd = d.toString("MMMM, dddd dd. yyyy");
    var html = "<div id=" + d.toISOString() + " class='rounded silver nomargin child' rel='" +
        entry["file"] + "'><div class=\"spinner\"></div><div class='date' rel=" + d.toISOString() + ">" + dd + "</div><div>";
    $("#post_content").append(html);
}

function append_postdata(data, start){
    start = typeof start == "undefined" ? 0 : start;
    var postd = '';
    var ph = parse_hash();
    if(ph && ph >= 0)
        start = ph;
    else if(ph == -1)
        postd = document.location.hash.substr(1);
    var end = start+5;
    $.each(data, function(i, entry){
        if(postd){
          var d = Date.parse(entry["t"]);
          if(d.toISOString() == postd){
              append_postentry(entry);
          }
        } else if(i >= start && i < end){
            append_postentry(entry);
        }
    });
}



function get_posts(){
    $.ajax({
      type: "GET",
      url: "index.json",
      processData: true,
      dataType: "json",
      success: function(data){
          append_postdata(data);
      },
      complete: function(){
        $('#post_content > div').each(function(){
          $(this).find("> div:gt(1)").load("data/" + $(this).attr("rel"), function(){
            var date = $(this).parent().find(".date").attr("rel");
            var str = "<li><a href='#" + date + "'>" + $(this).find("h1").text() + "</a></li>";
              $(this).parent().find(".spinner").hide();
            $("#rline .topics ul").append(str);
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
