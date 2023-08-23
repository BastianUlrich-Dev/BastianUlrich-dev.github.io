import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-proyecto01',
  templateUrl: './proyecto01.component.html',
  styleUrls: ['./proyecto01.component.scss']
})
export class Proyecto01Component {
  calculatorForm!: FormGroup;
  dia: number = 0;
  mes: number = 0;
  year: number = 0;
  edadYear: number = 0;
  edadMeses: number = 0;
  edadDias: number = 0;
  fechaACtual: number = new Date().getFullYear();

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.calculatorForm = this.initForm();
  }

  onSubmit() {
    if(this.calculatorForm.valid){
      console.log('form ->', this.calculatorForm.value);
      
      const today = new Date();
      const birthdate = new Date(this.calculatorForm.value.year, this.calculatorForm.value.month - 1, this.calculatorForm.value.day);
      const ageInMilliseconds = today.getTime() - birthdate.getTime();
      const ageDate = new Date(ageInMilliseconds);

      this.dia = this.calculatorForm.value.day;
      this.mes = this.calculatorForm.value.month;
      this.year = this.calculatorForm.value.year;

      this.edadYear = Math.abs(ageDate.getUTCFullYear() - 1970);
      this.edadMeses = ageDate.getUTCMonth();
      this.edadDias = ageDate.getUTCDate();

    }
    
  }

  initForm():FormGroup{
    // declarar propiedades de nuestro formulario con validaciones.
    return this.fb.group({
      day:['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month:['', [Validators.required, Validators.min(1), Validators.max(12)]],
      year:['', [Validators.required, Validators.min(1900), Validators.max(new Date().getUTCFullYear())]],

    })
  }
}
