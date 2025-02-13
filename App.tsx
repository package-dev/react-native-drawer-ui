import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import DrawerLayout from './index'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export function App() {
    return (
        <DrawerLayout
            ref={ref => DrawerLayout._ref(ref)}
            renderDrawerContent={() => (
                <DrawerContent />
            )}
            drawerWidth={Dimensions.get('screen').width * 0.75}>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen component={BottomHome} name={'BottomHome'} />
                <Screen component={Menu} name={'Menu'} />
            </Navigator>
        </DrawerLayout >
    )
}


export default function DrawerApp() {
    return (
        <Navigator screenOptions={{ headerShown: false }}  >
            <Screen name='App' component={App} />
        </Navigator>
    )
}

function Menu() {
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}
function DrawerContent() {
    return (
        <View>
            <Text>DrawerContent</Text>
        </View>
    )
}
function BottomHome() {
    return (
        <View>
            <Text>BottomHome</Text>
        </View>
    )
}
