import React from 'react';
import { StatusBar } from 'react-native';
import { Stack, Scene, Router } from 'react-native-router-flux';

import '~/config/ReactotronConfig';

import { Main, Login } from './pages';

import { colors } from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Router>
        <Stack key="root">
          <Scene hideNavBar key="main" component={Main} />
          <Scene initial hideNavBar key="login" component={Login} />
        </Stack>
      </Router>
    </>
  );
}

export default App;
