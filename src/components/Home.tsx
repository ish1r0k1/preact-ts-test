import { h } from 'preact';
import { HomeProps } from '../containers/HomeContainer';
import './styles.css';

const Home = (props: HomeProps) => (
  <div className="Home">
      <h2 className="Home__title">{props.home.count}</h2>
      <div>
        <button onClick={props.onIncrement}>increment</button>
        <button onClick={props.onasyncIncrement}>increment(async)</button>
        <button onClick={props.onDecrement}>decrement</button>
      </div>
  </div>
);

export default Home;
