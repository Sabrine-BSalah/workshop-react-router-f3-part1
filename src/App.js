import { Link, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {

  const testProps = " test props"

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />

        <Route path="/users" render={(props) =>
          <div>
            <Users {...props} testProps={testProps} />
            <Home  {...props} />
          </div>
        } />

      </Switch>
    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
