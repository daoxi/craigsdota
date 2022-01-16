import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Http, Response, Headers } from '@angular/http';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

//allows user to post custom game information through a form  

export class FormComponent implements OnInit {
game:any;
content:any;
starttime:any;
intro:any;
  constructor(public httpService: HttpService) { }
 
  ngOnInit() {
  	
  }
 
  getFormData(){
  	this.httpService.postFunc({game: this.game, content:this.content,starttime:this.starttime,intro:this.intro}).subscribe(
  			(res: Response) => console.log(res));
           this.game = "";
           this.content = "";
  	        this.starttime = "";
  	        this.intro = "";
  }
 
}