import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
errors:any;
  
  constructor(private router: Router,private auth:AuthenticationService) {}


  ngOnInit(): void {
      
  }
  selectedStructure: string = '';
  onSelectStructure(event:Event){
  const target = event.target as HTMLSelectElement;
  this.selectedStructure = target.value;
  }


onSubmit(form:NgForm){
  
  const name = form.value.name;
  const matricule = form.value.matricule;
  const password = form.value.password;
  const email = form.value.email;
  const structure_id = form.value.structure_id;
  const role = form.value.role;
  const structure_type = form.value.structure_type;
 
  this.auth.register(name,email,matricule,password,role,structure_type,structure_id).subscribe((res)=>{
    this.router.navigate(['login'])
  },
  (err)=>{
    this.errors =err.error.errors;
    
  }
  )
  
  }

}

