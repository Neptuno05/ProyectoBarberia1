import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage  {
  forgotPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    // Configuración del formulario reactivo
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get formControls() {
    return this.forgotPasswordForm.controls;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      console.log('Correo electrónico para restablecer contraseña:', email);
      // Lógica para enviar la solicitud de restablecimiento de contraseña

      // Redirigir al usuario al home después de enviar la solicitud
      this.navCtrl.navigateRoot('/home');
    } else {
      console.log('Formulario no válido');
    }
  }
  goBack() {
    this.navCtrl.back();
  }
}
