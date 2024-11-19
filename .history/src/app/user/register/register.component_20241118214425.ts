import { Component } from '@angular/core';
import { User } from '../user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User = {
    fullName: '',
    dateOfBirth: '',
    age: 0,
    hasDanceExperience: false,
    mother: {
      name: '',
      address: '',
      phone: '',
    },
    father: {
      name: '',
      address: '',
      phone: '',
    },
  };
  
  currentPage: number = 1;
  confirmation: boolean = false;

  nextPage(): void{
    this.currentPage++;
  }

  previousPage(): void{
    this.currentPage--;
  }

  submitForm(): void{
    this.confirmation = true;
  }

  closeConfirmation(): void{
    this.confirmation = false;
  }
}