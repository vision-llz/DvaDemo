import Menu from './pages/menu';
import Settings from './pages/settings';
import Login from './pages/login';
import Home from './pages/home';
import My from './pages/my';

import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

//createBottomTabNavigator 底部tab

const appTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    My: {
      screen: My,
    },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginBottom: 5,
      },
      upperCaseLabel: false,
      inactiveTintColor: '#999',
      activeTintColor: '#f4c043',
      style: {
        backgroundColor: '#fff',
      },
    },
  },
);

const appDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: appTabNavigator,
    },
    Setting: {
      screen: Settings,
    },
  },
  {
    initialRouteName: 'Home',
    // drawerLockMode: 'locked-open',
    // drawerBackgroundColor: '#ff00ff',
    // //定义侧边栏抽屉视图
    // drawerWidth: 200,
    // drawerPosition: 'left', //选项是left或right。默认是left位置。
    // useNativeAnimations: false, //启用原生动画。默认是true。
    // contentComponent: Menu,
  },
);

const MainNavigator = createStackNavigator(
  {
    Menu: {
      screen: appDrawerNavigator,
    },
    Login: {
      screen: Login,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      headerTitle: null,
      header: null,
    },
  },
);

export default createAppContainer(appDrawerNavigator);
