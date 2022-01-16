import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
//display list of characters user created  
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:any;

//shows character  

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    });
  }

}
