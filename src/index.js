import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { Stack, Scene, Router } from 'react-native-router-flux';

import '~/config/ReactotronConfig';

import store from '~/store';
import { Main, Login } from './pages';

import { colors } from './styles';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Router>
        <Stack duration={0} key="root">
          <Scene hideNavBar key="main" component={Main} />
          <Scene initial hideNavBar key="login" component={Login} />
        </Stack>
      </Router>
    </Provider>
  );
}

export default App;
