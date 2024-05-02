import { useActionSheet } from "@expo/react-native-action-sheet";
import ActionFormButton from "./Form/ActionFormButton";
import { router, useNavigation } from "expo-router";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Touchable, TouchableOpacity } from "react-native";

export default function AcTion() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
  const onPress = () => {
    const options = ["Sobre o App", "LogOut", "Cancel"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            router.push("./SobreApp");
            break;
          case 1:
            navigation.dispatch(CommonActions.goBack());
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {/* <ActionFormButton title="Menu" onPress={onPress} /> */}
      <MaterialIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
}
