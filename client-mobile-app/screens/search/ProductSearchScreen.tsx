import { ScrollView, StyleSheet, View } from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductSearchedItem from "./ProductSearchedItem";
import SearchInput from "./SearchInput";
import { TouchableRipple } from "react-native-paper";
import AppIcon from "../../app/components/AppIcon";
import colors from "../../app/utils/colors";
import { StackNavigationProp } from "@react-navigation/stack";

interface ProductSearchScreenProps {
  navigation: StackNavigationProp<any>;
}

const ProductSearchScreen = ({ navigation }: ProductSearchScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.list().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <AppSafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          paddingVertical: 0,
          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            width: "87%",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <SearchInput editable={true} />
        </View>
        <View
          style={{
            width: 50,
            flexDirection: "row",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <TouchableRipple onPress={() => navigation.goBack()}>
            <AppIcon name="close" size={35} color={colors.dark} />
          </TouchableRipple>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {products.slice(0, 5).map((product) => (
          <ProductSearchedItem
            onPress={() => console.log("detail page from search result")}
            key={product.id}
            product={product}
          />
        ))}
      </ScrollView>
    </AppSafeAreaView>
  );
};
export default ProductSearchScreen;
const styles = StyleSheet.create({});
