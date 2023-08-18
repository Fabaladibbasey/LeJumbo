import { ScrollView, StyleSheet } from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductSearchedItem from "./ProductSearchedItem";
import SearchInput from "./SearchInput";
const SearchScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.list().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <AppSafeAreaView>
      <SearchInput />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {products.slice(0, 5).map((product) => (
          <ProductSearchedItem key={product.id} product={product} />
        ))}
      </ScrollView>
    </AppSafeAreaView>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({});
