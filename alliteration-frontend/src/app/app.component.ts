import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlliterationsComponent } from './alliterations/alliterations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    AlliterationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alliteration-frontend';
}
