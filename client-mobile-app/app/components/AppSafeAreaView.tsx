import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

interface AppSafeAreaViewProps {
  children: React.ReactNode;
  propStyles?: { [key: string]: number | string };
}

const AppSafeAreaView = ({ propStyles, children }: AppSafeAreaViewProps) => {
  return (
    <SafeAreaView style={[styles.container, propStyles]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default AppSafeAreaView;
