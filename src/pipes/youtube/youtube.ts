import { Pipe , Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; 

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
@Injectable()
export class YoutubePipe {
  /**
   * Takes a value and makes it lowercase.
   */

   constructor(public dom: DomSanitizer){

   }

  transform(value,args) {
  	return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
