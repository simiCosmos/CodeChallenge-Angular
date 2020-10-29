using CodingChallenge.Core.DataAccess;
using CodingChallenge.Core.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingChallenge.Core.Business
{


    public interface IMovieService
    {
        List<Movie> GetMovies();
        List<Movie> GetMoviesBySearchText(string searchText);
        List<Movie> GetMoviesBySearchText(double rating, bool above);
        List<Movie> GetMoviesByYearRange(int startYear, int endYear);
    }
    public class MovieService : IMovieService
    {
        private readonly IMoviesData movieData;
        public MovieService(IMoviesData movieData)
        {
            this.movieData = movieData;
        }

        public List<Movie> GetMoviesBySearchText(string searchText)
        {
            var movies = this.movieData.GetMovies();
            return movies.Where(m => m.Title.ToLower().Contains(searchText.ToLower())).ToList();
        }

        public List<Movie> GetMoviesBySearchText(double rating, bool above)
        {
            var movies = this.movieData.GetMovies();
            if (above)
            {
                return movies.Where(m => m.Rating >= rating).ToList();
            }
            else
            {
                return movies.Where(m => m.Rating < rating).ToList();
            }
        }

        public List<Movie> GetMoviesByYearRange(int startYear, int endYear)
        {
            var movies = this.movieData.GetMovies();

            return movies.Where(m => m.Year >= startYear && m.Year <= endYear).ToList();
        }

        List<Movie> IMovieService.GetMovies()
        {
            return this.movieData.GetMovies();
        }
    }

}
