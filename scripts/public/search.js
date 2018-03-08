function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) { return t[n][r] }) } return res }


// Search for a specified string.
function search() {
    var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: 'video',
    order: "viewCount",
      maxResults: 3
  });


  request.execute(function(response) {
      var results = response.result;
      $("#results").html("");
      $.each(results.items, function (index, item) {
          $.get('../item.html', function (data) {
              $("#results").append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
          });
          
      });

      resetVideoHeight();
  });

  $(window).on("resize", resetVideoHeight);
}


function init() {
    gapi.client.setApiKey("AIzaSyCdlzjC5As_PAFvmFV_fv7BUGRxAMy8Sfc");
    gapi.client.load("youtube", "v3", function () {

    });
}

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9 / 16);
}