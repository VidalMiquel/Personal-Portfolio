import { Component } from '@angular/core';
import { CurriculumService } from '../../../services/curriculum.service';
import { ContactElement } from '../../../interfaces/contact-element.interface';

@Component({
  selector: 'shared-contact',
  templateUrl: './contact.component.html',
  styles: [`
    .list-inline-item {
      margin: 1rem; /* Space between items */
    }

    .list-inline-item i {
      font-size: 1.5rem; /* Increase icon size */
    }
  `]
})

export class ContactComponent {

  contactElements: ContactElement[] = [];

  constructor(private curriculumService: CurriculumService) {}
  
  ngOnInit(): void {
    this.contactElements = this.curriculumService.getContactComponent();
  }

}

