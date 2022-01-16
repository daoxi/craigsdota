
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Response, Http } from '@angular/http';

//Displays information of custom game lobbies

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AllDataComponent implements OnInit {
items:any = [];
 
  constructor(public httpService:HttpService) { }
 
  ngOnInit() {
  		this.httpService.getFunc().subscribe(
  				data => {
  			const myArr = [];
  			const itemKey = [];
  			for(let key in data){
  				myArr.push(data[key]);
  				itemKey.push(key);
  			}
  			this.items = myArr;
 	
  		}
  			)
  }
 
}