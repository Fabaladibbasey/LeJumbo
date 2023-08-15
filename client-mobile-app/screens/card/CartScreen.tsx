import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import CartItem from "./CartItem";
import { Product } from "../../app/models/product";
import colors from "../../app/utils/colors";
const CartScreen = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.list().then((response) => {
      setCartItems(response);
    });
  }, []);

  return (
    <AppSafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{
          padding: 20,
          // backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 20,
        }}
      >
        {cartItems.slice(1, 5).map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {/* //show Subtotal, shipping, tax, total */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Subtotal ({cartItems.length}) items
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Shipping:</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tax:</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${Math.floor(Math.random() * 100)}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${Math.floor(Math.random() * 100)}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${Math.floor(Math.random() * 100)}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${Math.floor(Math.random() * 300) + 700}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => console.log("Proceed to checkout")}
          style={{
            backgroundColor: colors.dark,
            padding: 10,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Proceed to Checkout ({cartItems.length})
          </Text>
        </Pressable>
      </ScrollView>
    </AppSafeAreaView>
  );
};
export default CartScreen;
const styles = StyleSheet.create({});
