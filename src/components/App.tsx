import { h } from 'preact';
import { Router, Route } from 'preact-router';
import { history } from '../store';
import HomeContainer from '../containers/HomeContainer';
import About from './About';
import NotFound from './NotFound';
import CoreLayout from './CoreLayout';

export default function App() {
  return (
    <CoreLayout>
        <Router history={history}>
            <Route path="/" component={HomeContainer}/>
            <Route path="/about" component={About}/>
            <Route default component={NotFound}/>
        </Router>
    </CoreLayout>
  );
}
