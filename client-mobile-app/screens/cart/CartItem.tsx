import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import AppIcon from "../../app/components/AppIcon";
import { Product } from "../../app/models/product";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../app/utils/colors";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const [heart, setHeart] = useState("cards-heart-outline");

  const handleHeart = () => {
    if (heart === "cards-heart-outline") {
      setHeart("cards-heart");
    } else {
      setHeart("cards-heart-outline");
    }
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <Pressable
            onPress={() => console.log(item)}
            style={{
              backgroundColor: colors.danger,
              width: 370,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginVertical: 10,
              marginHorizontal: 10,
            }}
          >
            <AppIcon name="delete-outline" size={100} color={colors.light} />
          </Pressable>
        )}
        onSwipeableOpen={() => console.log("swipe opened")}
      >
        <View
          style={{
            backgroundColor: "white",
            marginVertical: 10,
            borderBottomColor: "#F0F0F0",
            borderWidth: 2,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
          }}
        >
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Pressable
              onPress={handleHeart}
              style={{
                backgroundColor: "#D8D8D8",
                padding: 7,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                alignSelf: "flex-start",
              }}
            >
              <AppIcon name={heart} size={24} color="black" />
            </Pressable>
            <View>
              <Image
                style={{ width: 140, height: 140, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
            </View>

            <View>
              <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                {item?.title}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 }}>
                D{item?.price}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderTopColor: "#F0F0F0",
              borderWidth: 2,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#F0F0F0",
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6,
              }}
            >
              {true || item?.quantity > 1 ? (
                <Pressable
                  onPress={() => console.log(item)}
                  style={{
                    backgroundColor: "#D8D8D8",
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}
                >
                  <AppIcon name="minus" size={24} color="black" />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => console.log(item)}
                  style={{
                    backgroundColor: "#D8D8D8",
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}
                >
                  <AppIcon name="delete-outline" size={24} color="black" />
                </Pressable>
              )}

              <View
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 18,
                  paddingVertical: 6,
                }}
              >
                <Text>{item?.quantity ?? 9}</Text>
              </View>

              <Pressable
                onPress={() => console.log(item)}
                style={{
                  backgroundColor: "#D8D8D8",
                  padding: 7,
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                }}
              >
                <AppIcon name="plus" size={24} color="black" />
              </Pressable>
            </View>
            <View>
              <Text style={{ textAlign: "right", padding: 10 }}>
                Subtotal: D{item?.price * item?.quantity || 889.21}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
export default CartItem;
const styles = StyleSheet.create({});
