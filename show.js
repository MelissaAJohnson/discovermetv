window.onload = function () {
  var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split('=');
    data[tmp[0]] = tmp[1];
  }

  $.ajax({
    url: 'https://api.themoviedb.org/3/tv/' + data.tvId + '?language=en-US&api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    success: function(response) {
      console.log(response);
      $('#showInfo').after("<div class='row'><div class='col-lg-9'><div class='card mt-4'><img class='img-fluid rounded mb-3 mb-md-0' src='https://image.tmdb.org/t/p/w500" + response.backdrop_path + "' /><div class='card-body'><h3 class='card-title'>" + response.name + "</h3><p>" + response.overview + "</p></div></div></div><div class='col-lg-3'><br /><br /><p><strong>Genre</strong>: " + response.genres[0].name + "</p><p><strong>Average Voter Rating</strong>: " + response.vote_average + "</p><p><strong>First Air Date</strong>: " + response.first_air_date + "<br /><strong>Last Air Date</strong>: " + response.last_air_date + "</p></div></div>");
    }
  });
}
