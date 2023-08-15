import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: string;
  size?: number;
  color: string;
}

const AppIcon = ({ name, size = 40, color }: Props) => {
  return (
    <MaterialCommunityIcons
      name={name as React.ComponentProps<typeof MaterialCommunityIcons>["name"]}
      size={size}
      color={color}
    />
  );
};
export default AppIcon;
