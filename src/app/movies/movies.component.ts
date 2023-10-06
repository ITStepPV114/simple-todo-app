import { Component, Input } from '@angular/core';
import { IMovie } from './movie';
import { MOVIES } from './movies-mock-data';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  newMovie: IMovie = {
    title: "",
    year: 0,
    duration: { hours: 0, minutes: 0 },
    isCurrent: true,
  };
  //field for read timeDuration
  timeDuration = "";

  //array movies
  @Input()
  movies: IMovie[] = MOVIES;
  
  @Output() onChangeCurrentStatus=new EventEmitter<IMovie>();

  //methods
  changeCurrentStatus(movie: IMovie): void {
    movie.isCurrent = !movie.isCurrent;
    this.onChangeCurrentStatus.emit(movie);
  }

  deleteMovie(movie: IMovie): void {
    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }

  sortByYear(): void {
    this.movies.sort((m1, m2) => m1.year - m2.year);
  }

  addMovie(): void {
    console.log(this.timeDuration);
    let time = this.timeDuration.split(":"); // [1, 34]
    this.newMovie.duration.hours = +time[0];
    this.newMovie.duration.minutes = parseInt(time[1]);

    let movieForAdd = { ...this.newMovie } //create new object
    this.movies.push(movieForAdd);
  }
}
