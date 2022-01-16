import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})

//allows user to edit existing characters

export class EditListingComponent implements OnInit {
  id;
  profilename;
  playerid;
  age;
  character;
  image;
  playstyle;
  game;
  voice;
  playtime;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.profilename = listing.profilename;
      this.playerid = listing.playerid;
      this.age = listing.age;
      this.character = listing.character;
      this.playstyle = listing.playstyle;
      this.game = listing.game;
      this.voice = listing.voice;
      this.playtime = listing.playtime;
      
    });
  }

  onEditSubmit(){
    let listing = {
        profilename: this.profilename,
        playerid: this.playerid,
        age: this.age,
        character: this.character,
        playstyle: this.playstyle,
        game: this.game,
        voice: this.voice,
        playtime: this.playtime
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/listings']);
  }

}
