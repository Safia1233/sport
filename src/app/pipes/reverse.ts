import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class PipesPipe implements PipeTransform {

  transform(ch: string): string {
   
      var newCh = "";
      for (let i=0; i < ch.length;  i++) {
        newCh = ch[i]+ newCh;
      }
      
   return newCh;
  }
}









  //   if (value) {
  //     return value.split('').reverse().join('');
  //   }
  //   return '';
  // }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


