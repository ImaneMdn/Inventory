import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-sidenavv',
  templateUrl: './sidenavv.component.html',
  styleUrls: ['./sidenavv.component.css']
})
export class SidenavvComponent implements OnInit {
  constructor(private router: Router, private auth:AuthenticationService) {}
  ischefequipeuser=false;
  ischefcentreuser=false;
  ischefuniteuser=false;
  user:any;
  ngOnInit(): void {
    this.auth.getdemande().subscribe((res)=>{
      this.user = res;
      
    }, (err) =>{
      console.log(err);
    })
      
  }
}
