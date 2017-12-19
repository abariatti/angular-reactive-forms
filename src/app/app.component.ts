import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material Reactive Forms Starter';
  selectedUser = {
    name: 'Arnaud',
    details: 'fgsdafsad',
    admin: true,
    cool: false
  };

}
