import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
  standalone:true,
})
export class DirectiveComponent {
cityList : string[] = ["Pune","Solapur","Mumbai"];

employeArray : any[] =[
  {empId : 121, name :"Ziya", city:"Solapur", contactNo:"123456789"},
  {empId : 122, name:"Zabih",city:"Pune",contactNo: "8956980010"},
  {empId : 122, name:"Zakiullah",city:"Pune",contactNo: "8956980010"},
]
}

