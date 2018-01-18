import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Role } from '../../models/role';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

  user: User = new User();
  roles: [Role] = [new Role(1, 'Buyer'), new Role(2, 'Seller')];

  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    console.log(this.user);
  }
}
