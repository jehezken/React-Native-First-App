import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const wp = (percentage) => {
     return (percentage * width) / 100;
};
export const hp = (percentage) => {
     return (percentage * height) / 100;
};
