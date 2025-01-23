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
      title: 'Wave LIS',
      description: 'Built a dynamic real estate platform with Angular, enabling seamless property listings, client management, and transaction tracking. Utilized TypeScript, ngx-bootstrap, and REST API for a responsive, intuitive, and scalable solution.',
      image: 'assets/images/real-state.png',
      technologies: ['Angular', 'TypeScript', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/real-estate-platform',
      liveLink: 'http://103.190.95.89:9409/'
    },
    {
      title: 'Panther GPS - Vehicle Management System',
      description: 'Developed an admin panel for managing government vehicle operations, featuring tools for vehicle tracking, maintenance scheduling, and resource allocation. Designed an intuitive UI and integrated REST API for seamless functionality, enhancing efficiency and resource management.',
      image: 'assets/project2.jpg',
      technologies: ['Angular', 'TypeScript', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/panther-gps',
      liveLink: 'https://panthergps.com'
    },
    {
      title: 'SkyITMS - Intelligent Transport Management System',
      description: 'Developed a web-based solution to streamline government bus operations with features like scheduling, real-time monitoring, and detailed reporting. Designed intuitive UI components using Angular and integrated RESTful APIs for seamless data exchange and real-time synchronization, enhancing operational efficiency and decision-making.',
      image: 'assets/project3.jpg',
      technologies: ['Angular', 'TypeScript', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/skyitms',
      liveLink: 'http://103.89.44.153:8081/#/login'
    },
    {
      title: 'WEMS - Wave Employee Management System',
      description: 'Developed a feature-rich platform to streamline HR functions like employee records, attendance tracking, payroll management, and performance evaluations. Designed with scalability and efficiency in mind, WEMS automates HR processes, reducing workload and enhancing communication.',
      image: 'assets/project4.jpg',
      technologies: ['Angular', 'TypeScript', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/wems',
      liveLink: 'https://wems.wavecorp.in:9092/'
    },
    {
      title: 'LMT - Locate My Team',
      description: 'Developed a web platform to track employee attendance and location in real-time, improving team coordination and administrative efficiency. Integrated RESTful APIs for real-time synchronization and designed intuitive UI components using Angular to ensure a seamless user experience.',
      image: 'assets/project5.jpg',
      technologies: ['Angular', 'TypeScript', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/lmt',
      liveLink: 'http://103.89.44.59:9094/login'
    },
    {
      title: 'CLINICIAN - Healthcare Management Platform',
      description: 'Developed a user-friendly platform connecting patients with doctors, offering features like appointment booking, prescription management, and patient record access. The system is divided into Patient, Doctor, and Admin modules to streamline healthcare interactions and improve accessibility.',
      image: 'assets/project6.jpg',
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'ngx-bootstrap', 'REST API'],
      githubLink: 'https://github.com/yourusername/clinician',
      liveLink: 'https://admin.cliniciann.com/'
    }
    
    
    
    // Add more projects
  ];
}
