import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../utils/colors";

interface AppSafeAreaViewProps {
  children: React.ReactNode;
  propStyles?: { [key: string]: number | string };
}

const AppSafeAreaView = ({ propStyles, children }: AppSafeAreaViewProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          height: Constants.statusBarHeight,
        }}
      ></View>
      <SafeAreaView style={[styles.safeArea, propStyles]}>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default AppSafeAreaView;
