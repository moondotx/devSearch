import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const placeholderColor = useColorModeValue("gray.500", "whiteAlpha.600");
  const buttonTextColor = useColorModeValue("gray.700", "white");
  const buttonBgColor = useColorModeValue("gray.200", "gray.700");
  const [query, setQuery] = useState("");
  return (
    <InputGroup maxW={670} marginTop={4}>
      <InputLeftElement children={<Search color="blue" />} marginTop={2} />
      <InputRightElement
        children={
          <Button
            bg={buttonBgColor}
            color={buttonTextColor}
            _hover={{ bg: "gray.400" }}
            onClick={() => onSearch(query)}
            backgroundColor="blue"
          >
            Search
          </Button>
        }
        paddingTop={4}
        width={100}
      />
      <Input
        borderRadius={10}
        padding={6}
        type="text"
        placeholder="Search GitHub username…"
        _placeholder={{ color: placeholderColor }}
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        paddingLeft={20}
      />
    </InputGroup>
  );
};

export default SearchBar;
