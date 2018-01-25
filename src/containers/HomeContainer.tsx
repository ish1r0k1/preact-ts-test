import { h } from 'preact';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import Home from '../components/Home';
import { increment, decrement, asyncIncrement, Action } from '../actions/home';
import { State as HomeState } from '../reducers/home-reducer';
import { RootState } from '../types';

export interface HomeProps {
  home: HomeState;
  onIncrement: () => any;
  onDecrement: () => any;
  onasyncIncrement: () => any;
}

const HomeContainer = (props: HomeProps) => (
  <Home
    {...props}
  />
);

const mapStateToProps = (state: RootState) => ({
    home: state.home
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onasyncIncrement: async () => dispatch(await asyncIncrement())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
