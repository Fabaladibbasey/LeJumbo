import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import AppIcon from "../../app/components/AppIcon";
import colors from "../../app/utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { shadow, sizes, spacing } from "../../app/utils/constants";

interface SearchInputProps {
  onPress?: () => void;
  editable?: boolean;
}

const SearchInput = ({ onPress, editable = true }: SearchInputProps) => {
  const [search, setSearch] = useState("");

  return (
    // <TouchableRipple onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          {/* <AppIcon name="card-search-outline" color={colors.dark} /> */}
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <TextInput
          autoFocus
          onTouchStart={onPress}
          editable={editable}
          style={styles.field}
          placeholder="Search for products"
          value={search}
          onChangeText={setSearch}
        />
        {editable && (
          <View style={styles.filter}>
            <AppIcon name="filter-variant" color={colors.dark} size={30} />
          </View>
        )}
      </View>
    </View>
    // </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    borderWidth: 0.5,
    borderColor: colors.dark,
    ...shadow.light,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    padding: spacing.s,
    paddingVertical: spacing.s,
  },
  field: {
    flex: 1,
    padding: spacing.m,
    paddingVertical: spacing.s,
    fontSize: sizes.body,
    color: colors.dark,
  },
  filter: {
    padding: spacing.s,
    paddingVertical: 2,
  },
});

export default SearchInput;
