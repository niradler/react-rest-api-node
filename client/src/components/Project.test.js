import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';
import {Provider} from 'mobx-react';
import ProjectsModel from "../store/ProjectsModel";
const store = new ProjectsModel();
const Root = (
  <Provider store={store}>
  <Projects />
  </Provider>
)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Root, div);
});
