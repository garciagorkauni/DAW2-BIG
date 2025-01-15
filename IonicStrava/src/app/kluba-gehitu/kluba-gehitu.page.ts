import { Component, OnInit } from '@angular/core';
import { Kluba } from '../classes/kluba';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kluba-gehitu',
  templateUrl: './kluba-gehitu.page.html',
  styleUrls: ['./kluba-gehitu.page.scss'],
})
export class KlubaGehituPage {

  constructor(private apiService: ApiService, private navCtrl: NavController, private toastController: ToastController) { }

  kluba = {} as Kluba;  
  errorMessage= '';
  gehituForm(): void {
    if (!this.kluba) { return; }
    try {
      this.apiService.addKluba(this.kluba);
      this.reset();
      this.showToast('Kluba gehitu da!');
      //Hasierako orrira bueltatu
      this.navCtrl.navigateForward('tabs/tab1');
    } catch (error) {
      this.showToast('Errorea!');
      this.errorMessage = error as any;
    }
  }
  reset(): void {
    this.kluba = {
      id: 0,
      name: '',
      cover_photo_small: '',
      sport_type: '',
      privatea: false,
      member_count: 0,
      description: '',
      club_type: '',
      jarduerak: []
    };
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
