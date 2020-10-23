using CodingChallenge.Core.DataAccess;
using CodingChallenge.Core.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CodingChallenge.Core.Business
{


    public interface IMovieService
    {
        List<Movie> GetMovies();
    }
    public class MovieService : IMovieService
    {
        private readonly IMoviesData movieData;
        public MovieService(IMoviesData movieData)
        {
            this.movieData = movieData;
        }
        List<Movie> IMovieService.GetMovies()
        {
            return this.movieData.GetMovies();
        }
    }

}
