import { useActionSheet } from "@expo/react-native-action-sheet";
import { Text } from "react-native";
import ActionFormButton from "./Form/ActionFormButton";
import { router } from "expo-router";

export default function AcTion() {
  const { showActionSheetWithOptions } = useActionSheet();

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
            router.push("./../index");
            break;
          default:
            break;
        }
      }
    );
  };

  return <ActionFormButton title="Menu" onPress={onPress} />;
}
