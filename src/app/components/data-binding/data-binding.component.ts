import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  standalone: true,
})
export class DataBindingComponent {
 firstName : string ="Chetan";
 rollNo : number = 121;
 isActive : boolean =true;
 currentDate : Date = new Date();
 myPlaceholder : string ="Enter Full Name";
 div1ClassName : string= "bg-primary"

 constructor(private router : Router){
  console.log(this.firstName);
  this.isActive = false
  console.log(this.isActive);
 }

   show() {
    alert("this is angular");
  }

  goToAdmin(){
    this.router.navigateByUrl("/admin");
  }
}


