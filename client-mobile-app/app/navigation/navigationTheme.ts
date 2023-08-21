import { DefaultTheme } from "@react-navigation/native";
import colors from "../utils/colors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white,
        text: colors.dark,
        card: colors.white,
        border: colors.white,
        notification: colors.white,
    },
};
