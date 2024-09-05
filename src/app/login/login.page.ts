import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
        // Configuración del formulario reactivo con validaciones
    this.loginForm = this.formBuilder.group({
      username: [
        '', 
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9_-]{3,15}$') // Validación para nombre de usuario
        ]
      ],
      password: [
        '', 
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{6,}$') // Validación para contraseña
        ]
      ],
    });
  }
  goBack() {
    this.navCtrl.back();
  }

  // Acceso rápido a los controles del formulario
  get formControls() {
    return this.loginForm.controls;
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
      // Lógica para enviar los datos al servidor o autenticación
    } else {
      console.log('Formulario no válido');
    }
  }

  // Función para manejar el restablecimiento de la contraseña
  onResetPassword() {
    console.log('Restablecer contraseña');
    // Lógica para restablecer contraseña
  }

  // Función para regresar a la página anterior
  /* The `goBack` function in the `LoginPage` class is a method that is responsible for navigating back
  to the previous page using the `NavController` provided by Ionic. When this function is called, it
  triggers the `back()` method of the `NavController` instance, which essentially performs the
  navigation action to go back to the previous page in the navigation stack. */
  
}

