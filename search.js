window.onload = function () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }

  $.ajax({
    url: 'https://api.themoviedb.org/3/search/tv?page=1&query=' + data.search + '&api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    language: 'en-US',
    success: function(response) {
      var i = 0;
      // console.log(response);
      $.each(response, function () {
        $('#searchResults').after("<div class='row'><div class='col-md-7'><a href='show.html?tvId=" + response.results[i].id +"'><img class='img-fluid rounded mb-3 mb-md-0' src='https://image.tmdb.org/t/p/w500" + response.results[i].backdrop_path + "' /></a></div><div class='col-md-5'><h3>" + response.results[i].name + "</h3><p>" + response.results[i].overview + "</p><p><strong>Average Voter Rating</strong>: " + response.results[i].vote_average + "</p></div></div><br /><hr />");
        i++;
      });
    }
  });
}

function search() {
  var input = document.getElementById('searchInput').value;
  if(event.keyCode == 13) {
    window.location = 'results.html?search=' + input;
  }
}
