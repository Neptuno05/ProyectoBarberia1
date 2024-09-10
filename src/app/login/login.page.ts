import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Importar el servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private authService: AuthService) {
        // Configuración del formulario reactivo con validaciones
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3) // Al menos 3 caracteres
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4) // Al menos 4 caracteres
        ]
      ],
    });
  }


  // Acceso rápido a los controles del formulario
  get formControls() {
    return this.loginForm.controls;
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.setEmail(username);
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
      this.navCtrl.navigateRoot('/home');
      // Lógica para enviar los datos al servidor o autenticación
    } else {
      console.log('Formulario no válido');
    }
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     // Redirigir al usuario a la página 'home'
  //     this.navCtrl.navigateRoot('/home');
  //   } else {
  //     console.log('Formulario no válido');
  //   }
  // }

  // Función para manejar el restablecimiento de la contraseña
  onResetPassword() {
    console.log('Restablecer contraseña');
    this.navCtrl.navigateForward('/forgot-password');
  }

  // Función para regresar a la página anterior
  /* The `goBack` function in the `LoginPage` class is a method that is responsible for navigating back
  to the previous page using the `NavController` provided by Ionic. When this function is called, it
  triggers the `back()` method of the `NavController` instance, which essentially performs the
  navigation action to go back to the previous page in the navigation stack. */
  goBack() {
    this.navCtrl.back();
  }
}

