describe("Test getPopular", function() {
  it("should make successful AJAX request", function() {
    spyOn($, 'ajax');
    sendRequest();
    expect($.ajax.calls.any()).toEqual(true);
  });

  it("should contain show data", function() {
    expect($('#movieData')).not.toBeEmpty()
  });

});

function sendRequest() {
  $.ajax({
    url: 'https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    language:'en-US',
    sort_by: 'popularity.desc',
    success: function(data) {
      console.log(data);
    }
  });
}
