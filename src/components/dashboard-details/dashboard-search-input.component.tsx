import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { KeyboardEvent, RefObject } from "react";

type DashBoardSearchInputProps = {
  defaultValue: string;
  handleSearch: () => void;
  searchFieldRef: RefObject<HTMLInputElement>;
};

export const DashBoardSearchInput = ({
  defaultValue,
  handleSearch,
  searchFieldRef,
}: DashBoardSearchInputProps) => {
  const onEnter = (
    event: KeyboardEvent<HTMLInputElement>,
    callback: () => void
  ) => {
    if (event.key === "Enter") {
      callback();
    }
  };

  return (
    <InputGroup>
      <Input
        autoFocus={true}
        defaultValue={defaultValue}
        placeholder="Search by country code"
        onKeyDown={(event) => onEnter(event, handleSearch)}
        ref={searchFieldRef}
      />
      <InputRightElement width="unset">
        <Button borderLeftRadius={0} onClick={handleSearch}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
