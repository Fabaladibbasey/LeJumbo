import { StatusBar } from "expo-status-bar";
import Products from "./screens/product/Products";
import ProductDetail from "./screens/product/ProductDetail";
import CartScreen from "./screens/card/CartScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <ProductDetail />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
