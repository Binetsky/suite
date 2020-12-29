import * as React from 'react';
import svg4everybody from 'svg4everybody';

import '@styles/app.scss';

import { Counter } from './components/Counter/Counter';

/*
* Root component of the application
*
* @return - ReactComponent
*/
export const App = () => {
  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="padding-8 txt-center">
      <h1>Application is working</h1>
      <Counter />
    </div>
  );
};
