import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
   
  chart = new Chart({
    chart: {
      type: 'line',
      height: 310
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories:[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]

    },
    yAxis: {
      title: {
        text:'Revenue in $'
      }

    },
    series: [
       {
        name:"Arizona",
        type:"line",
        color: '#044342',
        data:[70,69,95,145,182,215,252,265,233,183,139,196]
       },
       {
        name:"ohio",
        type:"line",
        color: '#7e0505',
        data:[15,14,95,145,182,215,252,265,233,183,139,196]
       },
       {
        name:"new york",
        type:"line",
        color: '#ed9e20',
        data:[70,69,950,145,182,130,252,13,233,183,139,196]
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
