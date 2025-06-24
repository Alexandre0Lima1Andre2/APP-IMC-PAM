import { NavigationContainer } from "@react-navigation/native";

import TabsLayout from "./Tabs/_layout";

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabsLayout />
        </NavigationContainer>
    );
}
