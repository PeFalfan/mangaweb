import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export default class RegisterComponent {


  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      password1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    })
  }

  submitForm() {
    if (this.miFormulario.valid) {
      console.log("resultado: " + this.miFormulario.get('name')!.value);
      alert("resultado: " + this.miFormulario.get('name')!.value);
    }
  }


  //passCheck(){
  //if(this.miFormulario.get('password')?.value !== this.miFormulario.get('password1')?.value)
  //return console.log("las contraseñas deben coincidir.")



}
