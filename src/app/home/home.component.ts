import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//Name Table
  dataN: any[] = [];
  columnasN: string[] = ['Id', 'Created', 'Species', 'Name', 'Status'];
//Name Episode
  dataE: any[] = [];
  columnasE: string[] = ['Creation Date', 'Episode', 'Name', 'Url'];
//Location Table
  dataL: any[] = [];
  columnasL: string[] = ['Id', 'Dimension', 'Name','Type'];


  //Variables para los *ngIf
  names = false;
  dataEpisodes = false;
  dataLocations = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //this.llenarData();
    //this.episodesFunction();
    //this.locationsFunction(); 
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.dataN = data.results;
      console.log(this.dataN);
    })
    this.names = true;
    this.dataEpisodes = false;
    this.dataLocations = false;
  }

  episodesFunction() {
    this.apiService.getEpisodes().subscribe(data => {
      this.dataE = data.results;
      console.log(this.dataE)
    })
    this.names = false;
    this.dataEpisodes = true;
    this.dataLocations = false;
  }

  locationsFunction() {
    this.apiService.getLocations().subscribe(data => {
      this.dataL = data.results;
      console.log(this.dataL)
    })
    this.names = false;
    this.dataEpisodes = false;
    this.dataLocations = true;
  }

}
