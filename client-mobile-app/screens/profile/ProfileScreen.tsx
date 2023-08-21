import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import AppIcon from "../../app/components/AppIcon";
import AppSafeAreaView from "../../app/components/AppSafeAreaView";
import colors from "../../app/utils/colors";

const ProfileScreen = () => {
  return (
    <AppSafeAreaView>
      <View
        style={{
          marginTop: 15,
          paddingHorizontal: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar.Image
          source={require("../../assets/images/profile.jpg")}
          size={100}
        />

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Title style={{ fontSize: 20, fontWeight: "bold" }}>
            Fabala Dibbasey
          </Title>
          <AppIcon name="check-circle" color={colors.primary} size={20} />
        </View>
        <Caption style={{ fontSize: 14, lineHeight: 14 }}>
          @fabaladibbasey
        </Caption>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <AppIcon name="map-marker-outline" color={colors.primary} size={25} />
        <Caption style={{ fontSize: 14, lineHeight: 14 }}>
          No 1, Banjul, The Gambia{" "}
        </Caption>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          paddingHorizontal: 1,
          paddingVertical: 1,
        }}
      >
        <Pressable style={{ alignItems: "center" }}>
          <AppIcon name="email-outline" color={colors.dark} size={30} />
          <Caption style={{ fontSize: 14 }}>messages</Caption>
        </Pressable>

        <View style={{ alignItems: "center" }}>
          <AppIcon name="cart-outline" color={colors.dark} size={30} />
          <Caption style={{ fontSize: 14 }}>orders</Caption>
        </View>

        <View style={{ alignItems: "center" }}>
          <AppIcon name="heart-outline" color={colors.dark} size={30} />
          <Caption style={{ fontSize: 14 }}>favorites</Caption>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableRipple onPress={() => console.log("merge accounts")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>Merge Accounts</Text>
            <AppIcon
              color={colors.primary}
              name="account-plus-outline"
              size={30}
            />
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => console.log("share")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>Share</Text>
            <AppIcon color={colors.primary} name="share-variant" size={30} />
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>Rate Us</Text>
            <AppIcon color={colors.primary} name="star-outline" size={30} />
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 16 }}>Help / Support</Text>
            <AppIcon
              color={colors.primary}
              name="help-circle-outline"
              size={30}
            />
          </View>
        </TouchableRipple>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableRipple onPress={() => {}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ color: colors.danger }}>Logout</Text>
            <AppIcon color={colors.primary} name="logout" size={20} />
          </View>
        </TouchableRipple>
      </View>
    </AppSafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
