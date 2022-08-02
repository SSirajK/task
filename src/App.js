import React from "react";
import task from './data/tasks.json'
import TaskApp from './components/TaskApp'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function App() {
  return <div>
    <Router>
    <TaskApp data={task}/>
    </Router>
    </div>;
}

export default App;
