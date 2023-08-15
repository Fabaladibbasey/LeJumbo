import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import AppIcon from "../../app/components/AppIcon";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import colors from "../../app/utils/colors";

const ProductDetail = () => {
  const [heart, setHeart] = useState("cards-heart-outline");

  const handleHeart = () => {
    if (heart === "cards-heart-outline") {
      setHeart("cards-heart");
    } else {
      setHeart("cards-heart-outline");
    }
  };

  const carouselImages = [
    "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
  ];
  return (
    <AppSafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              20% off
            </Text>
          </View>

          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AppIcon name="share-variant" size={24} color="black" />
          </View>
        </View>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carouselImages.map((item, index) => (
            <ImageBackground
              style={{
                width: 300,
                height: 300,
                margin: 20,
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              source={{ uri: item }}
              key={index}
            ></ImageBackground>
          ))}
        </ScrollView> */}
        <Carousel
          layout={"stack"}
          layoutCardOffset={9}
          data={carouselImages}
          renderItem={({ item }) => (
            <ImageBackground
              style={styles.imageBackgroudStyle}
              source={{ uri: item }}
            ></ImageBackground>
          )}
          sliderWidth={500}
          itemWidth={440}
          //   loop={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Pressable
            onPress={handleHeart}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              //   marginTop: "auto",
              //   marginLeft: 20,
              //   marginBottom: 20,
            }}
          >
            <AppIcon name={heart} size={24} color="black" />
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>D343.50</Text>
        </View>
        <View
          style={{
            padding: 20,
            paddingTop: 0,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) –
            Super Ultrawide Screen QLED
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Note:The Jackets is US standard size, Please choose size as your
            usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm
            Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and
            Warm.Stand Collar Liner jacket, keep you warm in cold weather.
            Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on
            Chest (enough to keep cards or keys)and 1 Hidden Pocket
            Inside.Zippered Hand Pockets and Hidden Pocket keep your things
            secure. Humanized Design: Adjustable and Detachable Hood and
            Adjustable cuff to prevent the wind and water,for a comfortable fit.
            3 in 1 Detachable Design provide more convenience, you can separate
            the coat and inner as needed, or wear it together. It is suitable
            for different season and help you adapt to different climates
          </Text>
        </View>
        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />
        <View
          style={{
            padding: 20,
            paddingTop: 0,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Brand: Samsung
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Color: Black
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Display Technology: LED
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Resolution: 4K
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Refresh Rate: 144 Hz
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 10 }}>
            Hardware Interface: HDMI, DisplayPort
          </Text>
        </View>
        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Quantity</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={{
                padding: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>-</Text>
            </Pressable>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: "600" }}
            >
              1
            </Text>
            <Pressable
              style={{
                padding: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: colors.dark,
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
            Add to Cart
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Text>Buy Now</Text>
        </Pressable>
      </ScrollView>
    </AppSafeAreaView>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  imageBackgroudStyle: {
    width: 320,
    height: 300,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
