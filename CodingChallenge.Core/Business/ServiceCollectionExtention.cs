using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace CodingChallenge.Core.Business
{
    public static class ServiceCollectionExtention
    {
        #region Methods


        /// <summary>
        /// Configures reposiroty as dependencies for HBDS database.
        /// </summary>
        /// <param name="services">The services<see cref="IServiceCollection"/>.</param>
        /// <returns>Configured <see cref="IServiceCollection"/>.</returns>
        public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            // register repositories
              services.AddScoped<IMovieService, MovieService>();

            return services;

        }
        #endregion Methods
    }
}
