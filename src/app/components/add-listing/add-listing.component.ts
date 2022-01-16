import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

//this component allows me to add characters for user

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  profilename:any;
  playerid:any;
  age:any;
  character:any;
  playstyle:any;
  image:any;
  game:any;
  voice:any;
  playtime:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      profilename: this.profilename,
      playerid: this.playerid,
      age:this.age,
      character: this.character,
      playstyle: this.playstyle,
      game: this.game,
      voice: this.voice,
      playtime: this.playtime
      
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
