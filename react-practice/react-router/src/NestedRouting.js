import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

function NestedRouting() {
    return (
        <Router>
            <h3>Below is NestedRouting: </h3>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>

                <Switch>
                    <Route path="/topics"><Topics /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/"><Home /></Route>
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
    console.log(match);

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic /></Route>
                <Route path={match.path}><h3>Please select a topic</h3></Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    console.log(topicId);
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default NestedRouting;