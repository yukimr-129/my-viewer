import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { NotFoundPage } from '../components/pages/NotFoundPage/NotFoundPage';
import { PlayerPage } from '../components/pages/PlayerPage/PlayerPage';
import { TopPage } from '../components/pages/TopPage/TopPage';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Switch>
          <Route exact path='/' render={() => <TopPage />}/>
          <Route exact path='/play/:videoId' render={() => <PlayerPage />}/>
          <Route exact path='*' render={() => <NotFoundPage />}/>
        </Switch>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
