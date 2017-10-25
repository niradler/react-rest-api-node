import { observable, computed, action } from "mobx";

import ProjectModel from "./ProjectModel";

export default class ProjectsModel {
  @observable projects = [];

  @action
  delProject(id) {
    this.projects = this.projects.filter((p)=>{return p.id!==id})
  }

  @action
  addProject(project) {
    this.projects.push(new ProjectModel(project));
    console.log('project added',this.projects)
  }
}
