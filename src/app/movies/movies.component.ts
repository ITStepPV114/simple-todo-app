import { Component } from '@angular/core';
import { IMovie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies:IMovie[]=[
    { title:"Dune", 
    description:"Dune is a 2021 American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth",
    year:2021, 
    duration:{hours:1,minutes:20},
    isCurrent:true
  }
  ];

}
