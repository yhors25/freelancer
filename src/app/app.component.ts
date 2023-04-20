import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'freelancer';
  autor="Yhors Brayan"

  constructor(private fb:FormBuilder){  }

  contacto=this.fb.group({
    nombre:['',Validators.required],
    telefono:['',Validators.required],
    correo:['',[Validators.required,Validators.email]],
    mensaje:[''],
    
  })
  
  guardarContacto(){
    console.log(this.contacto.value);
  }

}
