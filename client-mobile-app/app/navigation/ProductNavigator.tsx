import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import ProductsScreen from "../../screens/product/ProductsScreen";
import ProductDetailsScreen from "../../screens/product/ProductDetailsScreen";
import ProductSearchScreen from "../../screens/search/ProductSearchScreen";
const ProductNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen
        name="ProductSearchScreen"
        component={ProductSearchScreen}
      />
    </Stack.Navigator>
  );
};
export default ProductNavigator;
const styles = StyleSheet.create({});
