import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <InputGroup>
      <InputLeftElement children={<Search color="blue" />} marginTop={2} />
      <InputRightElement
        children={
          <Button onClick={() => onSearch(query)} backgroundColor="blue">
            Search
          </Button>
        }
        marginTop={2}
        marginBottom={4}
        width={100}
      />
      <Input
        borderRadius={10}
        padding={6}
        type="text"
        placeholder="Search GitHub username…"
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
