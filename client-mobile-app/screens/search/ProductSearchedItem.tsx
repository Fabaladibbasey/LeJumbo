import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Rating } from "../../app/models/product";
import React from "react";
import AppIcon from "../../app/components/AppIcon";
import colors from "../../app/utils/colors";

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
}

const ProductSearchedItem = ({ product }: ProductSearchedItemProps) => {
  return (
    <View
      style={{
        width: "90%",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        // borderColor: "black",
        // borderWidth: 1,
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
      >
        <AppIcon name="heart-outline" size={30} color="black" />
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
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
              paddingVertical: 10,
            }}
          >
            {product?.title}
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "black",
            }}
          >
            4.2 ratings
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
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
  );
};
export default ProductSearchedItem;
const styles = StyleSheet.create({});
