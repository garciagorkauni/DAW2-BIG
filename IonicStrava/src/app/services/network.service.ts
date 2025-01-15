import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  connected = true;

  constructor() {

    this.checkInitialStatus();

    Network.addListener('networkStatusChange', async (status) => {
      this.connected = status.connected;
    });
  }

  async checkInitialStatus() {
    const status = await Network.getStatus();
    this.connected = status.connected;
  }

  getStatus(): boolean {
    return this.connected;
  }
}
