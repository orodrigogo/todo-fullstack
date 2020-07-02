import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Desabilita os alertas.
console.disableYellowBox = true;

import Home from './src/views/Home';
import Task from './src/views/Task';
import QrCode from './src/views/QrCode';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode
  })
);

export default function App() {
  return <Routes/>
}
