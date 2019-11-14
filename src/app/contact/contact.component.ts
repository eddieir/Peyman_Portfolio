import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model = {
    name: '',
    subject: '',
    emailAddress: '',
    message: ''
  };

  onSubmit() {
    console.log(this.model);
  }
}
