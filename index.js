/** @format */

import {AppRegistry} from 'react-native';
import Main from './app/Main';
//import LoginBond from './app/component/LoginBond';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
//AppRegistry.registerComponent(appName, () => LoginBond);
