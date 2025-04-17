import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Dio"

  person = {
    givenName: "Dio",
    surName: "Black",
    age: 99,
    email: "dio@mail.com"
  }
}
