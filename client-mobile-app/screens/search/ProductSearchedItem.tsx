import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Rating } from "../../app/models/product";
import React, { useState } from "react";
import AppIcon from "../../app/components/AppIcon";
import colors from "../../app/utils/colors";
import { TouchableRipple } from "react-native-paper";

interface ProductSearchedItemProps {
  product: {
    image: string;
    name?: string;
    title: string;
    price: number;
    rating: Rating;
    numReviews?: number;
    inStock?: number;
    qty?: number;
    description: string;
    reviews?: string;
    category?: string;
    delivery?: string;
  };
  onPress: () => void;
}

const ProductSearchedItem = ({
  product,
  onPress,
}: ProductSearchedItemProps) => {
  const [heart, setHeart] = useState("cards-heart-outline");

  const handleHeart = () => {
    if (heart === "cards-heart-outline") {
      setHeart("cards-heart");
    } else {
      setHeart("cards-heart-outline");
    }
  };

  return (
    <TouchableRipple onPress={onPress}>
      <View
        style={{
          width: "90%",
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: 10,
            paddingLeft: 35,
            zIndex: 2,
          }}
          onPress={handleHeart}
        >
          <AppIcon name={heart} size={30} color="black" />
        </Pressable>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <View
            style={{
              width: "30%",
              height: 150,
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={{ uri: product?.image }}
            />
          </View>
          <View
            style={{
              width: "60%",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "black",
                paddingVertical: 10,
              }}
            >
              {product?.title}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "black",
              }}
            >
              4.2 ratings
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "black",
              }}
            >
              in stock
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: colors.dark,
              }}
            >
              Delivery in 8hrs
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
              }}
            >
              ${product?.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};
export default ProductSearchedItem;
const styles = StyleSheet.create({});
