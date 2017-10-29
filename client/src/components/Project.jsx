import React, { Component } from "react";
import { observer } from "mobx-react";

const Project = observer(({ project,store }) => 
  <div className="box">
<ul>
  <li>
    {project.author}
    </li>
    <li>
    {project.authorLink}
    </li>
    <li>
    {project.demoLink}
    </li>
    <li>
    {project.description}
    </li>
    <li>
    {project.githubLink}
    </li>
    <li>
    {project.project}
    </li>
    <li>
    {project.technologies}
    </li>
    <li>
    {project.status}
  </li>
  </ul>
</div>
);

export default Project;
