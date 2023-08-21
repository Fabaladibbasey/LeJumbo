import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductItem from "./ProductItem";
import ProductHorizontalListItem from "./ProductHorizontalListItem";
import SearchInput from "../search/SearchInput";
import { TouchableRipple } from "react-native-paper";
import colors from "../../app/utils/colors";
import { RouteProp } from "@react-navigation/native";
import AppHeader from "../../app/components/AppHeader";

interface ProductsScreenProps {
  navigation: any;
  route: RouteProp<any, any>;
}

const ProductsScreen = ({ navigation }: ProductsScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 50);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -100],
  });

  useEffect(() => {
    agent.Products.list().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <AppSafeAreaView>
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          backgroundColor: colors.white,
          zIndex: 5,
          elevation: 4,
        }}
      >
        <AppHeader />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Trending Deals of the week
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {products.slice(1, 5).map((item, index) => (
            <TouchableRipple
              key={index}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            >
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginHorizontal: 10,
                }}
              >
                <Image
                  style={{ width: 180, height: 180, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                />
              </View>
            </TouchableRipple>
          ))}
        </View>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Today's Deals
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.slice(9, 15).map((item) => (
            <ProductHorizontalListItem
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
              key={item.id}
              product={item}
            />
          ))}
        </ScrollView>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />
        <View style={styles.productContainer}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: product })
              }
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <SearchInput
          editable={false}
          onPress={() => navigation.navigate("ProductSearchScreen")}
        />
      </View>
    </AppSafeAreaView>
  );
};
export default ProductsScreen;
const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
});
