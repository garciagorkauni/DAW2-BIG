import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  klubak: Kluba[] = [];
  
  constructor(private klubaService: KlubaService) {}
  
  getKlubak(): void{
    this.klubaService.getKlubak()
      .subscribe({
        next: data => {this.klubak = data; },
        error: error => console.log('Error::' + error)
      });
  }
  
  ngOnInit(){
    this.getKlubak();
  }
}
