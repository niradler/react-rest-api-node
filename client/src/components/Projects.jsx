import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Project from "./Project";

@observer
class Projects extends React.Component {
  @observable author;
  @observable authorLink;
  @observable demoLink;
  @observable description;
  @observable githubLink;
  @observable project;
  @observable technologies;
  @observable status = false;
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        author:
          <input
            type="text"
            name="author"
            value={this.author}
            onChange={this.handleInputChange}
          />
          authorLink:
          <input
          type="text"
          name="authorLink"
          value={this.authorLink}
          onChange={this.handleInputChange}
        />
        demoLink:
        <input
        type="text"
        name="demoLink"
        value={this.demoLink}
        onChange={this.handleInputChange}
      />
      description:
        <input
        type="text"
        name="description"
        value={this.description}
        onChange={this.handleInputChange}
      />
      githubLink:
      <input
      type="text"
      name="githubLink"
      value={this.githubLink}
      onChange={this.handleInputChange}
    />
    project:
      <input
      type="text"
      name="project"
      value={this.project}
      onChange={this.handleInputChange}
    />
    technologies:
      <input
      type="text"
      name="technologies"
      value={this.technologies}
      onChange={this.handleInputChange}
    />
  
          <button type="submit" className = "button">Add</button>
        </form>
        <hr />
        
          {this.props.store.projects.map(p => (
            <div key={p.id%2}>
            <button type = "button" className = "button" onClick={this.delProject.bind(this,p.id)}> remove </button>
            <Project project={p} key={p.id} store={this.props.store}/>
            </div>
          ))}
       

      </div>
    );
  }

  @action
  handleInputChange = e => {
    this[e.target.name] = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addProject({
        author:this.author,
        demoLink:this.demoLink,
        description:this.description,
        authorLink:this.authorLink,
        githubLink:this.githubLink,
        project:this.project,
        status:this.status,
        technologies:this.technologies,
      });

    e.preventDefault();
  };
  @action
  delProject = (id,e) => {
    this.props.store.delProject(id);
    e.preventDefault();
  };
}

export default Projects;
