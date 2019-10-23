import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'


// Components
import TabBarIcon from '../components/TabBarIcon'


// Screens
import StoreScreen from '../screens/StoreScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import PlayerScreen from '../screens/PlayerScreen'


// Constants
import Colors from '../constants/Colors'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {

      // Header Style
      headerStyle: {
        backgroundColor: Colors.layoutBackground,
        elevation: 0,
        height: 54
      },
      headerTitleStyle: {
        color: Colors.tintColor
      }
    }
  }
})


// Store Button
const StoreStack = createStackNavigator(
  {
    Home: StoreScreen
  },
  config
)
StoreStack.navigationOptions = {
  tabBarLabel: 'Podcast Store',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        // Platform.OS === 'ios'
        //   ? `ios-information-circle${focused ? '' : '-outline'}`
        //   : 'md-information-circle'
        Platform.OS === 'ios'
          ? 'ios-appstore'
          : 'md-appstore'
      }
    />
  )
}
StoreStack.path = ''


// Favorites Button
const FavoritesStack = createStackNavigator(
  {
    Links: FavoritesScreen
  },
  config
)
FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorite Podcasts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
}
FavoritesStack.path = ''


// Player Button
const PlayerStack = createStackNavigator(
  {
    Settings: PlayerScreen,
  },
  config
)
PlayerStack.navigationOptions = {
  tabBarLabel: 'Player',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} />
  ),
}
PlayerStack.path = ''


// Footer Tab Navigator
const tabNavigator = createBottomTabNavigator({
  StoreStack,
  FavoritesStack,
  PlayerStack,
},
  {
    tabBarOptions: {
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: Colors.layoutBackground,
        borderTopWidth: 0,
        paddingVertical: 4,
        height: 54
      },
    }
  })
tabNavigator.path = ''

export default tabNavigator
