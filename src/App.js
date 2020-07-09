import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { connect } from 'react-redux'; 
import { useDispatch, useSelector } from 'react-redux'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Todos() {
  let todoRef

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const _handleNewTodo = (e) => {
    e.preventDefault()
     let newTodo = todoRef.value
    dispatch({ type: 'ADD TODO', todo: newTodo })
    todoRef.value = ''
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={_handleNewTodo}>
        <label>New Todo </label>
        <input ref={input => todoRef = input} />
      </form>

      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>  
    </div>
  );
}


// export default App;

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProp = dispatch => ({
  addNewTodo: todo => dispatch({ type: 'ADD TODO', todo })
})

export default connect(mapStateToProps, mapDispatchToProp)(App);
