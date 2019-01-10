import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/service/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;
  constructor( private nasaApi: NasaApiService ) { }

  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
        this.apod = data;
      }, error => {
        console.log('Error al conectar con el servidor');
        this.error = 'Error al conectar con el servidor';
      });
  }

}
