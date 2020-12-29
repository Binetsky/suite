import * as React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store/configureStore';
import { actions } from '../../store/reducers/counterReducer';
import { CounterProps } from './types';

const mapStateToProps = (state: CounterProps) => ({
  counter: state.counter,
});

/*
* Component to show and update counter value, demonstrates basic work with react-redux + sagas
*
* @props - CounterProps
* @return - ReactComponent
*/
export const Counter = connect(mapStateToProps)((props: CounterProps): React.ReactElement => {
  const { counter: { counter } } = props;

  return (
    <div className="txt-center">
      <h5>
        {`Counter ${counter}`}
      </h5>
      <button type="button" onClick={() => store.dispatch(actions.incrementState())}>Increment</button>
      <button type="button" onClick={() => store.dispatch(actions.decrementState())}>Decrement</button>
    </div>
  );
});
