import {
  Button,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <HStack spacing={2}>
      <Text color={textColor}>{colorMode === "light" ? "Dark" : "Light"}</Text>
      <Button onClick={toggleColorMode} colorScheme="white" variant="">
        {colorMode === "light" ? (
          <LuMoon color={iconColor} />
        ) : (
          <LuSun color={iconColor} />
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeToggleButton;
