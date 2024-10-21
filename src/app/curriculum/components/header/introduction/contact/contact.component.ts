import { Component } from '@angular/core';

@Component({
  selector: 'curriculum-contact',
  templateUrl: './contact.component.html',
  styles: [`
    .list-inline-item {
      margin: 1rem; /* Space between items */
    }

    .list-inline-item i {
      font-size: 2rem; /* Increase icon size */
    }
  `]
})
export class ContactComponent { }
