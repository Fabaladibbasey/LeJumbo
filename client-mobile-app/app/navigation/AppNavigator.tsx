import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import AppIcon from "../components/AppIcon";
import CartScreen from "../../screens/cart/CartScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import ProductNavigator from "./ProductNavigator";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  //Screen names
  const productsScreen = "ProductsScreen";
  const cartScreen = "CartScreen";
  const profileScreen = "ProfileScreen";

  return (
    <Tab.Navigator
      initialRouteName={productsScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === productsScreen) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === cartScreen) {
            iconName = focused ? "cart" : "cart-outline";
          } else if (rn === profileScreen) {
            iconName = focused ? "account" : "account-outline";
          }

          // You can return any component that you like here!
          return (
            <AppIcon name={iconName as string} size={size} color={color} />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Shop",
        }}
        name={productsScreen}
        component={ProductNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Cart",
        }}
        name={cartScreen}
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
        }}
        name={profileScreen}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
const styles = StyleSheet.create({});
