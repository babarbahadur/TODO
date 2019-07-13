import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/auth";
import TodoScreen from "./src/screens/todoTab/todoScreen";
import DoneScreen from "./src/screens/done";
import DeleteScreen from "./src/screens/delete";
import SideDrawer from "./src/screens/sideDrawer/sideDrawer"

// Register Screens
Navigation.registerComponent("id.AuthScreen", () => AuthScreen);
Navigation.registerComponent("id.TodoScreen", () => TodoScreen);
Navigation.registerComponent("id.DoneScreen", () => DoneScreen);
Navigation.registerComponent("id.DeleteScreen", () => DeleteScreen);
Navigation.registerComponent("id.SideDrawer", () => SideDrawer);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "id.AuthScreen",
    title: "TODO"
  }
});