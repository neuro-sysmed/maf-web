import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import {ProjectsService} from '../project.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  displayedColumns: string[] = ['project',  'samples', 'description'];

  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.ProjectsService.getProjects()
    .subscribe(projects => this.projects = projects);
  }
}
