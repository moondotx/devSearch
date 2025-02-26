import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" marginX={"auto"}>
      <Text>DevFinder</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
