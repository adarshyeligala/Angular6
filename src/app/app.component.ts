import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm = new FormGroup({
    Name: new FormControl(Validators.required),
    Email:new FormControl(),
    Address: new  FormGroup({
      Street: new FormControl(),
      City:new FormControl(),
      PostalCode: new FormControl()
    })
  });
  onSubmit(){
   console.log(this.userForm.value);
  }
}
