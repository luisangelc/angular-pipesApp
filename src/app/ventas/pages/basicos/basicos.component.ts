import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent {
  nombreLower: string = 'luis angel';
  nombreUpper: string = 'LUIS ANGEL';
  nombreCompleto: string = 'lUIs aNgEl';

  fecha: Date = new Date(); // el dia de hoy
}
