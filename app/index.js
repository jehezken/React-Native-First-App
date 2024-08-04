import * as React from "react";
import { router } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { wp, hp } from "@/hooks/useScreen";
import { theme } from "@/constants/theme";

export default function WelcomeScreen() {
     return (
          <ImageBackground
               source={{
                    uri: "https://plus.unsplash.com/premium_photo-1690205362962-ceb0f0b1d951?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               }}
               resizeMode="cover"
               style={styles.imageBackground}>
               <SafeAreaView style={styles.container}>
                    <View style={{ flex: 1 }}>
                         <LinearGradient
                              colors={["transparent", "rgba(255,255,255,0.8)", "rgba(255,255,255,1)"]}
                              style={styles.linearGradient}
                         />
                         {/* Content */}
                         <View style={styles.contentContainer}>
                              <Text style={styles.title}>Pixels</Text>
                              <Text style={styles.punchline}>Every pixel Tell a Story</Text>
                              <View>
                                   <Pressable onPress={() => router.push("home")} style={styles.exploreButton}>
                                        <Text style={styles.exploreButtonText}>Start Explore</Text>
                                   </Pressable>
                              </View>
                         </View>
                    </View>
                    <StatusBar style="light" />
               </SafeAreaView>
          </ImageBackground>
     );
}

const styles = StyleSheet.create({
     imageBackground: {
          flex: 1,
          width: wp(100),
          height: hp(100),
     },
     container: {
          flex: 1,
     },
     linearGradient: {
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: wp(100),
          height: hp(100),
     },
     contentContainer: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 14,
     },
     title: {
          color: theme.colors.neutral(0.9),
          fontSize: hp(7),
          fontWeight: theme.fontWeight.bold,
     },
     punchline: {
          fontSize: hp(2),
          fontWeight: theme.fontWeight.medium,
          letterSpacing: 1,
          marginBottom: 10,
     },
     exploreButton: {
          marginBottom: 50,
          padding: 15,
          paddingHorizontal: 90,
          borderRadius: theme.rounded.xl,
          borderCurve: "continuous",
          backgroundColor: theme.colors.neutral(0.9),
     },
     exploreButtonText: {
          color: theme.colors.white,
          fontSize: hp(2),
          fontWeight: theme.fontWeight.medium,
     },
});
