import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'safeStyle'
})
export class SafeStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform( val: string ) {
    return this.sanitizer.bypassSecurityTrustStyle(`url('https://image.tmdb.org/t/p/w1280/${val}')`);
  }
}
