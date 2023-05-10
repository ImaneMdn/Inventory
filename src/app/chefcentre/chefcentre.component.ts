import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-chefcentre',
  templateUrl: './chefcentre.component.html',
  styleUrls: ['./chefcentre.component.css']
})
export class ChefcentreComponent  implements OnInit {


  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'here','scanned','there','mdp' , 'email' , 'text'];

  dataSource = new MatTableDataSource([
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'false' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    
   
  ]);
//this is for filtering scanned and not scanned
  selectedFilterValue = 'all';
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    
  }

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
  }

  ngOnInit(): void {
   
    
  }

  
  applyFilter(event?: Event | MatSelectChange) {
    if(event instanceof MatSelectChange) {
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      this.dataSource.filterPredicate = (data, filter) => {
        const scannedValue = data.scanned.toLowerCase();
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

  

 
}
  


