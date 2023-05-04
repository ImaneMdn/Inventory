import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts'
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
   
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 310
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories:[
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances'
      ]

    },
    yAxis: {
      title: {
        text:'Revenue in %'
      }

    },
    series: [
       {
        type: 'pie',
        data: [
          {
            name:'Electronics',
            y: 41.0,
            color: '#ed9e20',
          },
          {
            name:'Cosmetics',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name:'Clothes',
            y: 12.5,
            color: '#6920fb',
          },
          {
            name:'Applicances',
            y: 49.0,
            color: '#121212',
          },
          
        ]
       }
    ],
    credits:{
      enabled:false
    }
  })
   constructor() {

   }
   ngOnInit(): void {
       
   }
  }