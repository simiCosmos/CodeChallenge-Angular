using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using System.Xml.Serialization;

namespace CodingChallenge.Core.DataAccess.Models
{
    [DataContract(Name = "Library")]
    public class Library
    {

        [DataMember(Name ="Movies")]
        public List<Movie> Movies { get; set; }
    }
}
