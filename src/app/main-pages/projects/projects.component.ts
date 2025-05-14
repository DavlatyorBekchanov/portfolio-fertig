import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectComponent } from './project/project.component';
import { Projects } from './projects.model';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public Projects: Projects[] = [
    {
      projectNumber: '01',
      projectName: 'Join',
      githubLink: 'https://github.com/DavlatyorBekchanov/JOIN',
      projectLink:
        'http://join.davlatyor-bekchanov.com/join-375-main/index.html',
      active: true,
      description:
        'A task manager inspired by the Kanban system: create and organize tasks using drag-and-drop functionality, assign users, and categorize tasks.',
      technologyUsed: [
        {
          technology: 'HTML',
          technologyImg: 'assets/img/HTML-green.png',
        },
        {
          technology: 'CSS',
          technologyImg: 'assets/img/CSS-green.png',
        },
        {
          technology: 'JavaScript',
          technologyImg: 'assets/img/JavaScript-green.png',
        },
        {
          technology: 'Firebase',
          technologyImg: 'assets/img/Firebase-green.png',
        },
      ],
      hover: false,
      imgProject: 'assets/img/join2.png',
    },
    {
      projectNumber: '02',
      projectName: 'POLO LOCO',
      projectLink: 'http://polo.davlatyor-bekchanov.com/dist/index.html',
      githubLink: 'https://github.com/DavlatyorBekchanov/polo-loco',
      active: true,
      description:
        'Polo-Loco is a game developed using OOP, where the goal is to collect coins, defeat chicks and chickens, and finally beat the main boss.',
      technologyUsed: [
        {
          technology: 'HTML',
          technologyImg: 'assets/img/HTML-green.png',
        },
        {
          technology: 'CSS',
          technologyImg: 'assets/img/CSS-green.png',
        },
        {
          technology: 'JavaScript',
          technologyImg: 'assets/img/JavaScript-green.png',
        },
      ],
      hover: false,
      imgProject: 'assets/img/pololoco.png',
    },
    // {
    //   projectNumber: '03',
    //   projectName: 'POKODEX',
    //   projectLink: '',
    //   githubLink: '',
    //   active: true,
    //   description:
    //     'The Pokodex project is built using an API, where game cards are loaded through the API and then programmed and displayed using JavaScript.',
    //   technologyUsed: [
    //     {
    //       technology: 'Firebase',
    //       technologyImg: 'assets/img/Firebase-green.png',
    //     },
    //     {
    //       technology: 'HTML',
    //       technologyImg: 'assets/img/HTML-green.png',
    //     },
    //     {
    //       technology: 'CSS',
    //       technologyImg: 'assets/img/CSS-green.png',
    //     },
    //     {
    //       technology: 'JavaScript',
    //       technologyImg: 'assets/img/JavaScript-green.png',
    //     },
    //   ],
    //   hover: false,
    //   imgProject: 'assets/img/pokodex.png',
    // },
  ];
}
