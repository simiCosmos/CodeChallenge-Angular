import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../core/models/movie.model';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  pageOfItems: Movie[];
  isLoding = true;
  search = '';

  columnName: string = 'id';
  sortDirection = 'asc';

  constructor(
    private movieService: MoviesService,
    private sortService: SortService
  ){}

  ngOnInit(): void {
    this.getMovies();

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

  sortByColumn(columnName) {
    if(this.columnName == columnName) {
      this.sortDirection = this.sortDirection === 'asc'? 'desc' : 'asc'
    } else {
      this.sortDirection = 'asc';
      this.columnName = columnName;
    }
  }

  showArrow(sortColumn: string, sortDirection: string): boolean {
    return this.sortDirection === sortDirection && this.columnName === sortColumn;
  }
}

