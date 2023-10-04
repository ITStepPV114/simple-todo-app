import { Component } from '@angular/core';
import { IMovie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: IMovie[] = [
    {
      title: "Dune",
      description: "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth",
      year: 2021,
      duration: { hours: 1, minutes: 20 },
      isCurrent: true,
      genres: ["Drama", "Craim", "Action"]
    },
    {
      title: "Main on Fire",
      description: "John, an ex-CIA officer, is entrusted with the responsibility of safeguarding an entrepreneur's daughter. When the girl gets kidnapped, John vows to seek revenge.",
      year: 2004,
      duration: { hours: 2, minutes: 26 },
      isCurrent: true,
      genres: ["Drama", "Craim", "Action"]
    },
    {
      title: "Gladiator",
      description: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
      year: 2000,
      duration: { hours: 2, minutes: 35 },
      isCurrent: true,
      genres: ["Drama", "Action","History"]
    }

  ];

}