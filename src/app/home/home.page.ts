import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  constructor(private navCtrl: NavController) {}

  goBack(){
    this.navCtrl.back();
  }
  
  goToAgendar(barbero: string) {
    // Te lleva a la página de agendamiento con el id del barbero
    this.navCtrl.navigateForward(`/agendar/${barbero}`);
  }
}
