import { Component } from '@angular/core';
import { IMovie } from '../movies/movie';
import { MOVIES } from '../movies/movies-mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-todo-app';
  allMovies:IMovie[];
  isCurrentMovies:IMovie[];

  changeMovie?:IMovie;

  constructor(){
    this.allMovies=MOVIES;
    this.isCurrentMovies=MOVIES.filter((x)=>x.isCurrent==true);
  }

  changeCurrentStatus(movie: IMovie): void {
    this.changeMovie={...movie};
    this.isCurrentMovies=this.allMovies.filter((x)=>x.isCurrent==true).map(item=>({...item}));
  }
}
