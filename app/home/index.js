import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Pressable, ScrollView, TextInputComponent, TextInput } from "react-native";
import { wp, hp } from "@/hooks/useScreen";
import { theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Categories from "../../components/categories";

export default function HomeScreen() {
     const searhInputRef = React.useRef(null);
     const [search, setSearch] = React.useState("");
     const [activeCategory, setActiveCategory] = React.useState(null);

     const handleChangeCategory = (category) => {
          setActiveCategory(category);
     };
     // console.log("Active Category: " + activeCategory);

     return (
          <SafeAreaView style={styles.container}>
               <View style={styles.header}>
                    <Pressable>
                         <Text style={styles.title}>Pixels</Text>
                    </Pressable>
                    <Pressable>
                         <Ionicons name="reorder-two-outline" size={48} color="black" />
                    </Pressable>
               </View>
               <ScrollView contentContainerStyle={{ gap: 15, paddingHorizontal: wp(4) }}>
                    <View style={styles.search}>
                         <View style={styles.searchIcon}>
                              <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
                         </View>
                         <TextInput
                              ref={searhInputRef}
                              value={search}
                              onChangeText={(value) => setSearch(value)}
                              placeholder="Search for photos"
                              style={styles.searchInput}
                         />
                         {search.length >= 3 && (
                              <Pressable style={styles.closeButton} onPress={() => setSearch("")}>
                                   <AntDesign name="close" size={24} color={theme.colors.neutral(0.4)} />
                              </Pressable>
                         )}
                    </View>
                    {/* Categories */}
                    <View>
                         <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: wp(4),
     },
     title: {
          color: theme.colors.neutral(0.9),
          fontSize: hp(4),
          fontWeight: theme.fontWeight.medium,
     },
     search: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: hp(2),
          paddingHorizontal: wp(4),
          borderRadius: theme.rounded.xl,
          backgroundColor: theme.colors.neutral(0.05),
          position: "relative",
     },
     searchIcon: {},
     searchInput: {
          flex: 1,
          paddingHorizontal: wp(2),
          fontSize: wp(2.8),
     },
     closeButton: {
          padding: 8,
          borderRadius: theme.rounded.sm,
          backgroundColor: theme.colors.neutral(0.1),
          position: "absolute",
          right: 14,
     },
});
