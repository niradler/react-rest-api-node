import React, {Component} from 'react';
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
    }
    handleSubmit(event) {
        event.preventDefault();
        this
            .state
            .projects
            .push({
                author: this.state.author,
                authorLink: this.state.authorLink,
                demoLink: this.state.demoLink,
                description: this.state.description,
                githubLink: this.state.githubLink,
                project: this.state.project,
                status: this.state.status,
                technologies: this.state.technologies
            })
        this.setState({projects: this.state.projects})

    }
    handleChange(event) {

        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {
        var listItems = this.state.projects.map(function (item) {
            let i=0;
                return (
                    <div className="box">
                    <article className="media">
                        <div className="content">
                         
                              <ul>
                          <li key={i++}>
                        <div>{item.author}</div>
                        <div>{item.authorLink}</div>
                        <div>{item.demoLink}</div>
                        <div>{item.description}</div>
                        <div>{item.project}</div>
                        <div>{item.technologies}</div>
                    </li>
                    </ul>
                         
                      </div>
                    </article>
                  </div>
                  
                );
            });

        return (
            <div className="container">

                <form
                    onSubmit={this.handleSubmit}
                    onSubmit={this.handleSubmit.bind(this)}>
                   
                    <div className="field  ">
                        <label className="label">author</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>
                    
                    <div className="field ">
                        <label className="label">authorLink</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="authorLink"
                        value={this.state.authorLink}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">demoLink</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="demoLink"
                        value={this.state.demoLink}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">description</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">githubLink</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="githubLink"
                        value={this.state.githubLink}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">project</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="project"
                        value={this.state.project}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">technologies</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="technologies"
                        value={this.state.technologies}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">status</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="status"
                        value={this.state.status}
                        onChange={this
                        .handleChange
                        .bind(this)}/>
                        </div>
                    </div>
    
                    <button type="submit" className="button">submit</button>
                   
                </form>
                
                {/* <ul> */}
                    {listItems}
                {/* </ul> */}
            </div>
        );
    }
}
export default AddNewProject;