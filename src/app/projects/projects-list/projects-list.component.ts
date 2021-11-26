import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.model';
import {ProjectsService} from '../projects.service';



@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.ProjectsService.getProjects()
    .subscribe(projects => this.projects = projects);
  }
}
