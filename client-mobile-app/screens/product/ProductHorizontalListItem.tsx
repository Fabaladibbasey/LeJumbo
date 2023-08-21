import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../../app/models/product";
import colors from "../../app/utils/colors";
import { TouchableRipple } from "react-native-paper";

interface ProductHorizontalListItemProps {
  product: Product;
  onPress: () => void;
}

const ProductHorizontalListItem = ({
  product,
  onPress,
}: ProductHorizontalListItemProps) => {
  return (
    <TouchableRipple onPress={onPress}>
      <View
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
            backgroundColor: colors.primary,
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
      </View>
    </TouchableRipple>
  );
};
export default ProductHorizontalListItem;
const styles = StyleSheet.create({});
