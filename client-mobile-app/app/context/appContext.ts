import { createContext } from "react";
import { Animated } from "react-native";

const AppContext = createContext({
    tabBarDisplay: "flex" as "flex" | "none",
    setTabBarDisplay: (value: "flex" | "none") => {},
    appScrollY: 0,
    setAppScrollY: (value: number) => {},
});

export default AppContext;
