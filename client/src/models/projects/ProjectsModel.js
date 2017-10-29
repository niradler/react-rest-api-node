import { observable, computed, action } from "mobx";

import ProjectModel from "./ProjectModel";

export default class ProjectsModel {
    @observable projects = [];

    @action
    delProject(id) {
        this.projects = this.projects.filter((p) => { return p.id !== id })

        fetch('/projects' + '/' + id, {
            method: 'delete'
        }).then((response) => { console.log(response.json()) });
    }

    @action
    addProject(project) {
        this.projects.push(new ProjectModel(project));
        console.log('project added', this.projects)

        fetch('/projects', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((response) => { console.log(response.json()) });
    }
}