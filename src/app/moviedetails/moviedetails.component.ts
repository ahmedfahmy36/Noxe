import { Component,OnInit  } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.scss'
})
export class MoviedetailsComponent {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500'
  id:string='';
  movieDetail:any={};
constructor(private _ActivatedRoute: ActivatedRoute , private _MovieService: MoviesService){
  this.id= _ActivatedRoute.snapshot.params['id'];
}

ngOnInit():void {
this._MovieService.getMovieDetails(this.id).subscribe((response)=>{
this.movieDetail = response;
    })
  }  
}
