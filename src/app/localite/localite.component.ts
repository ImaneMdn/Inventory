import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls: ['./localite.component.css']
})
export class LocaliteComponent implements OnInit {
  
  localitedata:any;
  dataSource:any;
  selectedFilterValue = 'all';
  displayedColumns: string[] = ['locality_id', 'locality_name', 'total_count', 'scanned_count', 'not_scanned_count','pourcentage'];
  
  // dataSource = new MatTableDataSource([
  //   { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
  //   { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'false' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
  //   { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
  //   { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
  //   { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
  //   { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
  //   { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
  //   { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
  //   { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    
   
  // ]);
//this is for filtering scanned and not scanned
 
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl, private router: Router, private auth:AuthenticationService) {
    
  }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    this.auth.localité().subscribe(res => {
      this.localitedata = res;
      this.dataSource=new MatTableDataSource(this.localitedata);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
   })
  
   this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
    
  }
  //this is the previous one 
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  applyFilter(event?: Event | MatSelectChange) {
    if(event instanceof MatSelectChange ) {
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      this.dataSource.filterPredicate = (localitedata: { locality_name: string; }, filter: string) => {
        const scannedValue = localitedata.locality_name.toLowerCase();
        return filter === 'all' ? true : scannedValue === filter;
        
      }
    }else if (event instanceof Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    }
    
     if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }
  pplyFilter(event?: Event | MatSelectChange) {
    
    // if(event instanceof MatSelectChange) {
    //   const filterValue = event.value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();

    //   this.dataSource.filterPredicate = (data, filter) => {
    //     const scannedValue = data.scanned.toLowerCase();
    //     return filter === 'all' ? true : scannedValue === filter;
        
    //   }
    // }else if (event instanceof Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // }
    
    // if(event instanceof MatSelectChange) {
    //   const filterValue = event.value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();

    //   this.dataSource.filterPredicate = (data, filter) => {
    //     const scannedValue = data.scanned.toLowerCase();
    //     return filter === 'all' ? true : scannedValue === filter;
        
    //   }
    // }else if (event instanceof Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // }
    
      if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  
 
}
  


 

  

