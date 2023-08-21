import { StyleSheet, View, Image } from "react-native";
import { Badge, Switch } from "react-native-paper";
import colors from "../utils/colors";
import AppIcon from "./AppIcon";
import { useState } from "react";
import { shadow } from "../../app/utils/constants";

const AppHeader = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingVertical: 0,
        backgroundColor: colors.white,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        elevation: 4,
        ...shadow.light,
      }}
    >
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={colors.primary}
      />
      <Image
        style={{ width: 100, height: 50, resizeMode: "contain" }}
        source={require("../../assets/logo.png")}
      />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            marginRight: 10,
          }}
        >
          <Badge
            style={{
              position: "absolute",
              top: -10,
              right: -8,
              backgroundColor: colors.primary,
              zIndex: 1,
            }}
          >
            3
          </Badge>
          <AppIcon name="bell" color="black" size={25} />
        </View>
      </View>
    </View>
  );
};
export default AppHeader;
const styles = StyleSheet.create({});
