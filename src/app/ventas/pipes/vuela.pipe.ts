import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(valor: Boolean): string {
    return (valor) ? 'vuela' : 'no vuela';
  }

}

export default VuelaPipe;
