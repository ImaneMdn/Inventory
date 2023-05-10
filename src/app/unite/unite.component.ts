import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.css']
})
export class UniteComponent implements OnInit {

  unitedata:any;
  dataSource:any;
  unitedataselect:any;
  selectedFilterValue = 'all';
  displayedColumns: string[] = ['unit_id', 'unit_name', 'total_count', 'scanned_count','not_scanned_count','percentage'];

 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl, private router: Router, private auth:AuthenticationService) {
    
  }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    this.auth.unite().subscribe(res => {
      this.unitedata = res;
      this.dataSource=new MatTableDataSource(this.unitedata);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
   })

   this.auth.uniteselect().subscribe(res => {
    this.unitedataselect = res;
    
 })

   this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
    
  }
 

  applyFilter(event?: Event | MatSelectChange) {
    if(event instanceof MatSelectChange ) {
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      this.dataSource.filterPredicate = (unitedata: { unit_name: string; }, filter: string) => {
        const scannedValue = unitedata.unit_name.toLowerCase();
        
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
    
      if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  
    
  

  
 
}
  

