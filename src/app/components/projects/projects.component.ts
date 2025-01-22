import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://project1.com'
    },
    // Add more projects
  ];
}
