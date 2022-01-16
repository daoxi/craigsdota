import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
//Firebase service set up to enable data transfer for getListings, getListingDetails, addListing, updateListing, deleteListing components to manage user characters
@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'listingimages';
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
  }
//import character list
  getListings(){
    return this.listings;
  }
//import character information
  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }
//create new character
  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }
//edit existing character
  updateListing(id, listing){
    return this.listings.update(id, listing);
  }
//remove character from database
  deleteListing(id){
    return this.listings.remove(id);
  }

}

interface Listing{
  $key?:string;
  profilename?:string;
  playstyle?:string;
  image?:string;
  playerid?:string;
  age?:string;
  game?:string;
  voice?:string;
  playtime?:string;
}
