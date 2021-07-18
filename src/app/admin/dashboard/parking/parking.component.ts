import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './../../../common/global-constants';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  
  places: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.places = db.list('places').valueChanges();
  }
  
  ngOnInit(): void {

  
  }

}
