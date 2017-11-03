import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';

import Projects from "./components/Projects";

import ProjectsModel from "./store/ProjectsModel";


const store = new ProjectsModel();

const Root = (
    <Provider store={store}>
    <Projects />
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
