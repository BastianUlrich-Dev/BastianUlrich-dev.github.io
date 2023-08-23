import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-proyecto01',
  templateUrl: './proyecto01.component.html',
  styleUrls: ['./proyecto01.component.scss']
})
export class Proyecto01Component {
  ageForm: FormGroup;
  // formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ageForm = this.fb.group({
      birthdate: [''],
      day: [''],
      month: ['']
    });
  }

  onSubmit() {
    const birthdate = new Date(this.ageForm.value.birthdate);
    const today = new Date();
    const ageInMilliseconds = today.getTime() - birthdate.getTime();
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30));
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    const day = this.ageForm.value.day;
    const month = this.ageForm.value.month;

    alert(`Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`);
    alert(`Day: ${day}`);
    alert(`Month: ${month}`);
  }
}
