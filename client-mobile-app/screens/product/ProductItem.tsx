import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../../app/models/product";
import AppIcon from "../../app/components/AppIcon";
import colors from "../../app/utils/colors";
import { useState } from "react";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [heart, setHeart] = useState("cards-heart-outline");

  const handleHeart = () => {
    if (heart === "cards-heart-outline") {
      setHeart("cards-heart");
    } else {
      setHeart("cards-heart-outline");
    }
  };

  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: product.image }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {product.title}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          D{product.price}
        </Text>
        <Pressable onPress={handleHeart}>
          <AppIcon name={heart} size={30} color={colors.dark} />
        </Pressable>
      </View>
    </Pressable>
  );
};
export default ProductItem;
const styles = StyleSheet.create({});
