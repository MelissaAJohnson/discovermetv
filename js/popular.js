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
        $('#movieData').after("<div class='row'><div class='col-md-7'<a href='#'><img class='img-fluid rounded mb-3 mb-md-0' src='https://image.tmdb.org/t/p/w500" + data.results[i].backdrop_path + "' /></a></div><div class='col-md-5'><h3>" + data.results[i].name + "</h3><p><div class='overview'>" + data.results[i].overview + "</div></p><p><strong>Average Voter Rating</strong>: " + data.results[i].vote_average + "</p></div></div><br /><hr />");
        i++;
      });
      $('.overview').each(function(event){ /* select all divs with the overview class */
        var max_length = 400; /* set the max content length before a read more link will be added */
        if($(this).html().length > max_length){ /* check for content length */
          var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */
          var long_content	= $(this).html().substr(max_length);
          $(this).html(short_content+
               '<a href="#" class="read_more">. . . Read More</a>'+
               '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
          $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
            event.preventDefault(); /* prevent the a from changing the url */
            $(this).hide(); /* hide the read more button */
            $(this).parents('.overview').find('.more_text').show(); /* show the .more_text span */
          });
        }
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
