import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): unknown {
    return null;
  }

}
