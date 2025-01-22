import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Bootstrap',
    'Angular Material',
    'Node.js',

    // Add more skills
  ];
}
