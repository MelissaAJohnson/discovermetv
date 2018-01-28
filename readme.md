# DiscoverMe TV #

DiscoverMe TV is a simple app that provides users a list of popular TV shows, allows the user to search for a TV show and view details of the show.

The challenges faced in developing this app include:
* determining the coding language to use
* retrieving data from The Movie Database API
* passing retrieved API data from screen to screen
* incorporating a clean, user-friendly interface
* developing tests

## Selecting the code language ##
This was a very simple app - there is no data storage or manipulation and it only required 3 pages. So I felt using Ruby or PHP was overkill. I decided to basic HTML, CSS, and JavaScript along with the jquery library to streamline some of the coding. Also, because I am focusing on front-end development, I am choosing JavaScript as much as I can in order to get practice and become more efficient with the language.

If I were to do this over, given the amount of elements shared in the screens, I would have chosen Angular.

## Retrieving data from API ##
This was a simple challenge because I'm familiar with using ajax calls to communicate with APIs. The Move Database API is very well documented and offers more than enough endpoints needed to fulfill the project requirements.

## Passing data among screens ##
The majority of my app development in the past has been with PHP and Ruby. I'm very comfortable passing data among controllers and views in those environments. I had to do a quick Google search to remind me to use URL parameters to pass data between html screens. Again, this was an easy thing to do because there was no need to worry about such things as obfuscating sensitive data.

## Implementing a user-friendly interface ##
This was another simple challenge. My go-to library for UI is Bootstrap. Given its longevity, there are many themes available and I've always had luck finding something that works with a only few customizations. In this case, I used 2 themes:
* 1-column portfolio for popular listing and search results
* shop-item to display show details

I only needed to make some minor css changes to each of these.

## Developing tests ##
Developing the tests was the most difficult part of this project. This is because I've only done test writing in Ruby using rspec. I've never written tests for JavaScript. Resolving this was fairly easy - I did a quick search on popular JavaScript testing tools, found and implemented Jasmine, read a couple tutorials, and wrote my tests.

## If I had more time ##
This was a fun project because I could see a lot of things I could do to improve the app. I will most likely pursue the following changes when time permits:
* fix the stretched images on single show view
* insert placeholder image when poster nil
* build more robust tests
* incorporate icons to represent voting results: this would be a simple calculation and case statement to identify how many 'stars' would apply for the given rating
* I would leverage the database to list the show seasons and their corresponding images
* I would parse the show link to identify where the user can watch the show and display this destination as a logo (e.g. Netflix logo)
* incorporate movies: I will create page tabs so the user can easily switch between movies and tv shows.
