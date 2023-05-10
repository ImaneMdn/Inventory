import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chefequipe',
  templateUrl: './chefequipe.component.html',
  styleUrls: ['./chefequipe.component.css']
})
export class ChefequipeComponent  implements OnInit {

  showlocalitescanneePopup = false;
  showlocalitenonscanneePopup = false;
  inventairedata:any;
  dataSource:any;
  selectedFilterValue = 'all';
  displayedColumns: string[] = ['LOC_ID_INIT','LOC_LIB_INIT','AST_ID','AST_LIB',  'AST_VALBASE','AST_DTE_ACQ','code_bar', 'status'];
  
  ngOnInit(): void {
    this.auth.listeinventaire().subscribe(res => {
      this.inventairedata = res;
      this.dataSource=new MatTableDataSource(this.inventairedata);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
   })
  
   this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
    
  }
  

  applyFilter(event?: Event | MatSelectChange) {
    if(event instanceof MatSelectChange ) {
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      this.dataSource.filterPredicate = (centredata: { center_name: string; }, filter: string) => {
        const scannedValue = centredata.center_name.toLowerCase();
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
  // displayedColumns: string[] = ['id', 'firstname', 'lastname', 'here','scanned','there','mdp' , 'email' , 'text'];
   displayedColumns2: string[] = ['nom', 'structure_id'];
  
  datasource2 = new MatTableDataSource([
    {nom:'dcsi', structure_id: '1234',},
    {nom: 'dcsi', structure_id: '234',},
    {nom: 'dcsi', structure_id: '1234',},
    {nom:'dcsi', structure_id: '1234',},
    {nom: 'dcsi', structure_id: '234',},
    {nom: 'dcsi', structure_id: '1234',},
    {nom:'dcsi', structure_id: '1234',},
    {nom: 'dcsi', structure_id: '234',},
    {nom: 'dcsi', structure_id: '1234',},
    {nom: 'dcsi', structure_id: '1234',},
    {nom:'dcsi', structure_id: '1234',},
    {nom: 'dcsi', structure_id: '234',},
    {nom: 'dcsi', structure_id: '1234',}
  ]);
  // dataSource1 = new MatTableDataSource([
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
 // selectedFilterValue = 'all';
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl, private router: Router, private auth:AuthenticationService) {
    
  }

  // ngAfterViewInit() {
  //    this.dataSource1.paginator = this.paginator;
  //    this.dataSource1.sort = this.sort;
  //    this.datasource2.paginator = this.paginator2;
  //    this.datasource2.sort = this.sort;
  //    this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
    

  // }

  // ngOnInit(): void {
   
    
  // }

  
  // applyFilter(event?: Event | MatSelectChange) {
  //   if(event instanceof MatSelectChange) {
  //     const filterValue = event.value;
  //     this.dataSource1.filter = filterValue.trim().toLowerCase();

  //     this.dataSource1.filterPredicate = (data, filter) => {
  //       const scannedValue = data.scanned.toLowerCase();
  //       return filter === 'all' ? true : scannedValue === filter;
        
  //     }
  //   }else if (event instanceof Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource1.filter = filterValue.trim().toLowerCase();

  //   }
    
  //    if (this.dataSource1.paginator) {
  //     this.dataSource1.paginator.firstPage();
  //   }
  //   if (this.datasource2.paginator) {
  //     this.datasource2.paginator.firstPage();
  //   }
    
  // }
  showlocalitescannee() {
    this.showlocalitescanneePopup = true;
    
    
  }
  showlocalitenonscannee(){
    this.showlocalitenonscanneePopup = true;
    
  }
  
  hidescanneeForm() {
    this.showlocalitescanneePopup = false;

     
  }
  hidenonscanneeForm() {
    this.showlocalitenonscanneePopup = false;

     
  }
  
  
 
}
  
