import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'async',
  standalone: true
})
export class AsyncPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
