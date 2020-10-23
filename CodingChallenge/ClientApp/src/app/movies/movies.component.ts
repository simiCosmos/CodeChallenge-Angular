import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../core/models/movie.model';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  pageOfItems: Movie[];
  isLoding = true;

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  constructor(
    private movieService: MoviesService,
    private sortService: SortService
  ){}

  ngOnInit(): void {
    this.getMovies();

    this.sortService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      if (this.columnName != event.sortColumn) {
          this.sortDirection = '';
      }
  });
  }

  getMovies() {
    this.movieService.getMovies().subscribe(data => {
      if(data) {
        this.isLoding = false;
        let movie = null;
        data.forEach(movieFromAPI => {
          movie = new Movie();
          movie.id = movieFromAPI.id;
          movie.title = movieFromAPI.title;
          movie.year = movieFromAPI.year;
          movie.rating = movieFromAPI.rating;
          movie.franchise = movieFromAPI.franchise;
          this.movies.push(movie);
        });
      }
    }, error => {
      alert('Failed to fetch the movies. Refresh to try again.');
    })
  }

  onChangePage(pageOfItems: Array<Movie>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onFilterChange(pageOfItems: Array<Movie>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}

