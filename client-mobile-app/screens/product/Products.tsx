import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductItem from "./ProductItem";
import ProductHorizontalListItem from "./ProductHorizontalListItem";
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.list().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <AppSafeAreaView>
      <ScrollView>
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
            <Pressable
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
            </Pressable>
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
            <ProductHorizontalListItem key={item.id} product={item} />
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
            <ProductItem key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </AppSafeAreaView>
  );
};
export default Products;
const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
});
