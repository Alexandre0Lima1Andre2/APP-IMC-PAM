import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './index';
import TabsIMC from './imc';

const Tabs = createBottomTabNavigator();

export default function TabsLayout() {
    return (

        <Tabs.Navigator>
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen
            name="index"
            options={{ 
                title: "Início",
                tabBarIcon: ({color, size}) => <Ionicons name='home-outline' size={size} color={color}/>
                }}
            component={Home}
            />
            <Tabs.Screen
            name="imc"
            component={TabsIMC}
            options={{ 
                title: "imc",
                tabBarIcon: ({color, size}) => <Ionicons name='settings-outline' size={size} color={color}/>
            }}
                />
        </Tabs>
        </Tabs.Navigator>

    );
}
