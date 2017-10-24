import React, {
    Component
} from 'react';
class AddNewProject extends Component {
    constructor(props) {
        super()
        this.state = {
            author: "Renan Lopes",
            authorLink: "http://renanlopes.com",
            demoLink: "https://typescript-angular4.herokuapp.com/",
            description: "Desenvolvimento Skills em TypeScript, Orientação a Objeto, Angular 2 / 4 e WebPa" +
                "ck",
            githubLink: "https://github.com/renanlopescoder/typescript-angular4",
            project: "Project Manager",
            status: "Disponível",
            _id: "5956cc7b734d1d1fcbde3766",
            technologies: "Angular 2/4, TypeScript e Webpack",
            projects: []
        };
        this.getProjects = this.getProjects.bind(this);
        this.addProjects = this.addProjects.bind(this);
        this.getProjects();
    }
    getProjects() {
        let self=this;
        fetch('http://localhost:3000/list/projects').then((resp) => resp.json())
            .then(function (data) {
                self.setState({
                    projects: data
                });
            });
    }
    addProjects() {
       let self = this;
        self
            .state
            .projects
            .push({
                author: self.state.author,
                authorLink: self.state.authorLink,
                demoLink: self.state.demoLink,
                description: self.state.description,
                githubLink: self.state.githubLink,
                project: self.state.project,
                status: self.state.status,
                technologies: self.state.technologies,
                _id: self.state.projects.length
            })
        self.setState({
            projects: self.state.projects
        })
    }
    putProjects() {

    }
    delProjects(id) {
        this.state.projects=this.state.projects.filter((item) => {
                return item._id !== id
            })
           
        this.setState({
            projects: this.state.projects
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addProjects();
    }

    handleChange(event) {
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {

        var listItems = this
            .state
            .projects
            .map( (item)=> {
                    
                    return ( < div className = "box" > < article className = "media" > < div className = "content" > < ul > < li key = {
                            item._id
                        } >
< button type = "button" className = "button" onClick={this.delProjects.bind(this, item._id)} > remove < /button >
                        <
                        div > {
                            item.author
                        } < /div> <
                        div > {
                            item.authorLink
                        } < /div > < div > {
                        item.demoLink
                    } < /div> <
                    div > {
                        item.description
                    } < /div > < div > {
                    item.project
                } < /div> <
                div > {
                    item.technologies
                } < /div > < /
                li > <
                /ul > < /div > < /article > < /div >

            );
    });

return ( <
    div className = "container" >

    <
    form 
   
    onSubmit = {
        this
        .handleSubmit
        .bind(this)
    } >

    <
    div className = "field  " >
    <
    label className = "label" > author < /label > < div className = "control" > < input className = "input" type = "text" name = "author" value = {
    this.state.author
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/> < /
div > <
    /div > < div className = "field " > < label className = "label" > authorLink < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "authorLink"
value = {
    this.state.authorLink
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > demoLink < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "demoLink"
value = {
    this.state.demoLink
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > description < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "description"
value = {
    this.state.description
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > githubLink < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "githubLink"
value = {
    this.state.githubLink
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > project < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "project"
value = {
    this.state.project
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > technologies < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "technologies"
value = {
    this.state.technologies
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < div className = "field" > < label className = "label" > status < /label > <
    div className = "control" >
    <
    input className = "input"
type = "text"
name = "status"
value = {
    this.state.status
}
onChange = {
    this
    .handleChange
    .bind(this)
}
/ > < /
div > <
    /div > < button type = "submit" className = "button" > submit < /button >

    <
    /form > {
listItems
} < /div>
);
}
}
export default AddNewProject;