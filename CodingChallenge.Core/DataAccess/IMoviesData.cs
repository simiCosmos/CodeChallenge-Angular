using CodingChallenge.Core.DataAccess.Models;
using CodingChallenge.Core.DataAccess.Provider;
using System;
using System.Collections.Generic;
using System.Text;

namespace CodingChallenge.Core.DataAccess
{
    public interface  IMoviesData
    {
        List<Movie> GetMovies();
    }
    public partial class MoviesData : IMoviesData
    {
        private readonly IXMLReader xmlReader;
        public MoviesData(IXMLReader xmlReader)
        {
            this.xmlReader = xmlReader;
        }
        public List<Movie> GetMovies()
        {

            return xmlReader.ReadMoviesFromXml();
        }
    }
}
