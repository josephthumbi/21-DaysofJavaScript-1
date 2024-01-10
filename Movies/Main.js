// Movie object constructor
function Movie(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
  }
  
  // Movie application object
  let movieApp = {
    movies: [],
  
    // Function to add a new movie
    addMovie: function (title, director, releaseYear) {
      let newMovie = new Movie(title, director, releaseYear);
      this.movies.push(newMovie);
      console.log(`"${title}" added to the movie list.`);
    },
  
    // Function to delete a movie by title
    deleteMovie: function (title) {
      let index = this.movies.findIndex(movie => movie.title === title);
  
      if (index !== -1) {
        let deletedMovie = this.movies.splice(index, 1)[0];
        console.log(`"${title}" deleted from the movie list.`);
        return deletedMovie;
      } else {
        console.log(`"${title}" not found in the movie list.`);
        return null;
      }
    },
  
    // Function to display all movies
    displayMovies: function () {
      if (this.movies.length === 0) {
        console.log("No movies in the list.");
      } else {
        console.log("Movie List:");
        this.movies.forEach(movie => {
          console.log(`${movie.title} (${movie.releaseYear}) - Directed by ${movie.director}`);
        });
      }
    }
  };
  
  // Adding movies
  movieApp.addMovie("Inception", "Christopher Nolan", 2010);
  movieApp.addMovie("The Shawshank Redemption", "Frank Darabont", 1994);
  movieApp.addMovie("The Dark Knight", "Christopher Nolan", 2008);
  
  // Displaying movies
  movieApp.displayMovies();
  
  // Deleting a movie
  let deletedMovie = movieApp.deleteMovie("Inception");
  
  // Displaying movies after deletion
  movieApp.displayMovies();
  