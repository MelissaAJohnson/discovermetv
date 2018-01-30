
describe("Test getPopular", function() {
  it("should make successful API call", function() {
    spyOn($, 'ajax');
    sendRequest();
    expect($.ajax.calls.any()).toEqual(true);
  });

  it("should contain show data", function() {
    expect($('#movieData')).not.toBeEmpty()
  });

});

describe("Test Search", function() {
  it("should make successful search request", function () {
    spyOn($, 'ajax');
    searchRequest();
    expect($.ajax.calls.any()).toEqual(true);
  });
})

describe("Test Show details", function() {
  it("should make successful API call", function () {
    spyOn($, 'ajax');
    showRequest();
    expect($.ajax.calls.any()).toEqual(true);
  });
})

function sendRequest() {
  $.ajax({
    url: 'https://api.themoviedb.org/3/discover/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    language:'en-US',
    sort_by: 'popularity.desc',
    success: function(data) {
    }
  });
};

function searchRequest() {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/tv?page=1&query=house&api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    success: function(results) {
    }
  });
}

function showRequest() {
  $.ajax({
    url: 'https://api.themoviedb.org/3/tv/1425?language=en-US&api_key=fb6a1d3f38c3d97f67df6d141f936f29',
    success: function(response) {
    }
  });
}
