import StackNavigator from "./navigation/StackNavigator";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const getFont = () =>
  FontFace.loadAsync({
    yes: require("./assets/font/inter_thin.ttf"),
  });
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "gray",
      secondary: "yellow",
    },
  };
  return (
    <>
      <PaperProvider theme={theme} style={{ fontFamily: "inte_thin" }}>
        <StackNavigator />
      </PaperProvider>
    </>
  );
}
// adb reverse tcp:3500 tcp:3500

//eas build -p android --profile preview
