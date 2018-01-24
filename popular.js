$(document).ready(function() {
getPopular();
search();
});

function getPopular(){
  $.ajax({
    url: 'https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    language:'en-US',
    sort_by: 'popularity.desc',
    success: function(data) {
      var i = 0;
      $.each(data, function () {
        // console.log(data);
        $('#movieData').after("<div class='row'><div class='col-md-7'<a href='#'><img class='img-fluid rounded mb-3 mb-md-0' src='https://image.tmdb.org/t/p/w500" + data.results[i].backdrop_path + "' /></a></div><div class='col-md-5'><h3>" + data.results[i].name + "</h3><p>" + data.results[i].overview + "</p><p><strong>Average Voter Rating</strong>: " + data.results[i].vote_average + "</p></div></div><br /><hr />");
        i++;
      });
    }
  });
};

function search() {
  var input = document.getElementById('searchInput').value;
  if(event.keyCode == 13) {
    window.location = 'results.html?search=' + input;
  }
}
