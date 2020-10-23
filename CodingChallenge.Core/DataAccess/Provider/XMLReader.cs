using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Serialization;
using CodingChallenge.Core.DataAccess.Models;
using Microsoft.Extensions.Configuration;
using CodingChallenge.Utilities;

namespace CodingChallenge.Core.DataAccess.Provider
{
    public interface IXMLReader
    {
        List<Movie> ReadMoviesFromXml();
    }
    public class XMLReader: IXMLReader
    {
        private readonly IConfiguration configuration;
        private IEnumerable<Movie> _movies;
        public XMLReader(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        public List<Movie> ReadMoviesFromXml()
        {
            return this.GetMovies().ToList();
        }

        private IEnumerable<Movie> GetMovies()
        {
            return _movies ?? (_movies = this.configuration["LibraryPath"].FromFileInExecutingDirectory().DeserializeFromXml<Library>().Movies);
        }
    }
}
