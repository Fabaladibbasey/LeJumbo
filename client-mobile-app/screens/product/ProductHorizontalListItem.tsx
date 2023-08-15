import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../../app/models/product";

interface ProductHorizontalListItemProps {
  product: Product;
}

const ProductHorizontalListItem = ({
  product,
}: ProductHorizontalListItemProps) => {
  return (
    <Pressable
      style={{
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: product.image }}
      />

      <View
        style={{
          backgroundColor: "#E31837",
          paddingVertical: 5,
          width: 130,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          Upto 20% off
        </Text>
      </View>
    </Pressable>
  );
};
export default ProductHorizontalListItem;
const styles = StyleSheet.create({});
