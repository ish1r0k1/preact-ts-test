import { h } from 'preact';
import { Link } from 'preact-router/match';

const CoreLayout = (props: any) => (
  <div className="App">
    <nav>
      <ul>
        <li>
          <Link activeClassName="active" href="/">Home</Link>
        </li>
        <li>
          <Link activeClassName="active" href="/about">About</Link>
        </li>
      </ul>
    </nav>
    {props.children}
  </div>
);

export default CoreLayout;
