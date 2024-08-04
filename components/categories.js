import * as React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { categories } from "../constants/categories";
import { theme } from "@/constants/theme";
import { wp, hp } from "@/hooks/useScreen";

export default function Categories({ activeCategory, handleChangeCategory }) {
     return (
          <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.contentContainer}
               data={categories}
               keyExtractor={(item) => item}
               renderItem={({ item, index }) => (
                    <CategoryItem
                         isActive={activeCategory == item}
                         handleChangeCategory={handleChangeCategory}
                         item={item}
                         index={index}
                    />
               )}></FlatList>
     );
}

const CategoryItem = ({ item, index, isActive, handleChangeCategory }) => {
     let color = isActive ? theme.colors.white : theme.colors.neutral(0.9);
     let backgroundColor = isActive ? theme.colors.gray : theme.colors.neutral(0.05);

     return (
          <View>
               <Pressable
                    onPress={() => handleChangeCategory(isActive ? null : item)}
                    style={[styles.categoryItem, { backgroundColor }]}>
                    <Text style={[styles.categoryTitle, { color }]}>{item}</Text>
               </Pressable>
          </View>
     );
};

const styles = StyleSheet.create({
     contentContainer: {
          gap: 16,
     },
     categoryItem: {
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginVertical: 8,
          borderRadius: theme.rounded.sm,
          borderCurve: "continuous",
          backgroundColor: theme.colors.neutral(0.05),
     },
     categoryTitle: {
          fontSize: wp(3),
          fontWeight: theme.fontWeight.medium,
          color: theme.colors.neutral(0.9),
          textTransform: "uppercase",
     },
});
