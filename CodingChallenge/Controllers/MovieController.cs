using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodingChallenge.Core.Business;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CodingChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService movieService;
        public MovieController(IMovieService movieService)
        {
            this.movieService = movieService;
        }
        // GET: api/<MovieController>
        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            return this.movieService.GetMovies();
        }

        [HttpGet("matching-by-title/{searchText}")]
        public IEnumerable<dynamic> GetMatchingMoviesByTitle(string searchText)
        {
            return this.movieService.GetMoviesBySearchText(searchText);
        }

        [HttpGet("by-rating")]
        public IEnumerable<dynamic> GetMatchingMoviesByTitle([FromQuery(Name = "ratedAbove")] bool ratedAbove,
            [FromQuery(Name = "rating")] double rating)
        {
            return this.movieService.GetMoviesBySearchText(rating, ratedAbove);
        }

        [HttpGet("by-year-range")]
        public IEnumerable<dynamic> GetMatchingMoviesByTitle([FromQuery(Name = "startYear")] int startYear,
            [FromQuery(Name = "endYear")] int endYear)
        {
            return this.movieService.GetMoviesByYearRange(startYear, endYear);
        }

        [HttpGet("movies-by-franchise/{searchText}")]
        public IEnumerable<dynamic> GetMatchingMoviesByfranchise(string searchText)
        {
            return this.movieService.GetMoviesByFranchise(searchText);
        }


    }
}
