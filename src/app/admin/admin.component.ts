import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  showIcons = false;
  clicked = false;
 
  showacceptedFormPopup = false;
  showrefusedFormPopup = false;
  selectedRow: any;
  filterOn: boolean = false;
  selectedStatus: any;
  userlist:any;
  dataSource:any;
  displayedColumns: string[] = ['id', 'name', 'matricule','email','role', 'structure_id', 'status', 'Compte_isActivated', 'edited_by', 'icon'];
  
  /*
  dataSource = new MatTableDataSource([
    { id: 1, firstname: 'John', lastname: 'Doe',role: 'chef centre',structure: '1234', here: true, accepted: true, refused: true },
    { id: 2, firstname: 'Jane', lastname: 'Doe',role: 'chefunite' ,structure: '5687', here: true , accepted: true, refused: true },
    { id: 3, firstname: 'Bob', lastname: 'Smith',role: 'chefcentre' ,structure: '5687', here: true , accepted: true, refused: true },
    { id: 4, firstname: 'John', lastname: 'Doe',role: 'cheflocalite' ,structure: '5687', here: true , accepted: true, refused: true },
    { id: 5, firstname: 'Jane', lastname: 'Doe',role: 'chefcentre' ,structure: '5687', here: true , accepted: true, refused: true },
    { id: 6, firstname: 'Bob', lastname: 'Smith',role: 'chefcentre' ,structure: '5687', here: true , accepted: true, refused: true },
    { id: 7, firstname: 'John', lastname: 'Doe',role: 'cheflocalite' ,structure: '5687', here: true , accepted: true, refused: true},
    { id: 8, firstname: 'Jane', lastname: 'Doe',role: 'chefcentre' ,structure: '5687', here: true , accepted: true, refused: true},
    { id: 9, firstname: 'Bob', lastname: 'Smith',role: 'chefcentre' ,structure: '5687', here: true , accepted: true, refused: true},
    
   
  ]);
  
  */

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl, private router: Router, private auth:AuthenticationService) {
    
  }


  ngAfterViewInit() {
    /*
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    */
    
 }

 ngOnInit(): void {
  this.auth.admin().subscribe(res => {
    this.userlist = res;
    this.dataSource=new MatTableDataSource(this.userlist);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
 })

 this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
  
 /*
  this.dataSource.data.forEach(row => {
    const status = localStorage.getItem(`row_${row.id}_status`);
    if (status === 'accepted') {
      row.accepted = true;
      row.refused = false;
      
    } else if (status === 'refused') {
      row.accepted = false;
      row.refused = true;
    }
  });
 */
 
  
  
 }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }

 
showIconsFor(row: any) {

  this.selectedRow = row; // Set the selected row
  
  
  
}

handleAccepted(user: any) {
  const id = user.id;
  this.auth.modifyStatus(id).subscribe((res) => {
    // Handle success here
    console.log('Status modified successfully');
    localStorage.setItem(`row_${id}_status`, 'accepted');
    this.showacceptedFormPopup = false;
  }, (err) => {
    console.error(err);
  });
}


// handleAccepted(row:any) {
//   this.selectedRow = row;
//   if (row.accepted && row.refused) {
//     row.accepted = true;
//     row.refused = false;
//     this.showacceptedFormPopup = false;
//     //this.sendStatus(row, 'accepted');
//     localStorage.setItem(`row_${row.id}_status`, 'accepted');
//   }else if (row.accepted && !row.refused) {
//           //do nothing
//   }
  
// }

handleRefused(user: any) {
  const id = user.id;
  this.auth.modifyStatus2(id).subscribe((res) => {
    // Handle success here
    console.log('Status modified successfully');
    this.showacceptedFormPopup = false;
  }, (err) => {
    console.error(err);
  });
}
handleEnregistrerClick(user: any) {
  const id = user.id;

  // Call the accepted or refused API endpoint based on the selected value from the dropdown list
  if (this.selectedStatus === 'accepted') {
    this.handleAccepted(user);
  } else if (this.selectedStatus === 'refused') {
    this.handleRefused(user);
  }

  // Hide the popup
  this.showacceptedFormPopup = false;
}
showacceptedForm(row: any) {
  this.showacceptedFormPopup = true;
  this.selectedRow = row;
  
}
showrefusedForm(row: any){
  this.showrefusedFormPopup = true;
  this.selectedRow = row;
}

hideacceptedForm() {
  this.showacceptedFormPopup = false;
  this.showrefusedFormPopup =false;
}

hiderefusedForm() {
  this.showrefusedFormPopup = false;
}


//to get the data from admin 

/*
user:any;
  ngOnInit(): void {
     
      this.auth.admin().subscribe((res)=>{
        this.user = res;
      }, (err) =>{
        console.log(err);
      })
  }
*/



// sendStatus(row: any, status: string) {
//   // Make an HTTP call to send the status to the backend
//   // this.http.post('url', {id: row.id, status}).subscribe(() => {});
// }

  
 
}
  

