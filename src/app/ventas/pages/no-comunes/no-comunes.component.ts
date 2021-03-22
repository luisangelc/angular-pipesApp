import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Maritza';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'HolaMundo Gay', 'Hernando', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 cliente esperando.',
    'other': 'tenemos # cliente esperando.',
  }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    console.log('mierdaaaaa');
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Luis Angel',
    edad: 30,
    direccion: 'Ottawa, Canada'
  }

  // JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: !0 },
    { nombre: 'Robin', vuela: !1 },
    { nombre: 'Aquaman', vuela: !1 },
  ];

  // Async Pipe
  miObservable = interval(5000); //0, 1, 2, 3, 4, 5....
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
