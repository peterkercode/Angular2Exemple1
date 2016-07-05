import { Component } from '@angular/core';
import { ClientDetailComponent } from './client/client.component';

@Component({
    selector: 'my-app',
    template: `<client-form></client-form>`,
    directives: [ClientDetailComponent]
})

export class AppComponent  {
   
}