import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { ActivityScreen } from '../../features/activity/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  activity: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, // Hide the navigation bar
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="activity"
        component={ActivityScreen}
        options={{
          title: 'Form',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}
