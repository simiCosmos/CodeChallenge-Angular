using System;
using System.Collections.Generic;
using System.Text;
using CodingChallenge.Core.DataAccess.Provider;
using Microsoft.Extensions.DependencyInjection;

namespace CodingChallenge.Core.DataAccess
{
    public static class ServiceCollectionExtention
    {
        #region Methods


        /// <summary>
        /// Configures reposiroty as dependencies for HBDS database.
        /// </summary>
        /// <param name="services">The services<see cref="IServiceCollection"/>.</param>
        /// <returns>Configured <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection CodeChallengeData(this IServiceCollection services)
        {
            // register repositories
            services.AddScoped<IMoviesData, MoviesData>();


            services.AddSingleton<IXMLReader, XMLReader>();

            return services;

        }
        #endregion Methods
    }
}
