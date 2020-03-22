import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  error:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.user = {name:"", email:"", dob:0, password:"", conf_password:""}
  }
  postUser(){
    this._httpService.postUser(this.user).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.user = data;
        this._router.navigate(['/'])
      }
    })
  }

}
