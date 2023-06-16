import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { KeyboardEvent, useRef, useState } from "react";

import { useUserStore } from "@/lib/stores/user.store";

import { Modal } from "../ui";

export const UserDetails = () => {
  const { name, title, setName, setTitle } = useUserStore();
  const hasUserDetails = name && title;
  const [step, setStep] = useState(1);
  const step1 = step === 1;
  const step2 = step === 2;
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: !hasUserDetails });

  const nameRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const onEnter = (
    event: KeyboardEvent<HTMLInputElement>,
    callback: () => void
  ) => {
    if (event.key === "Enter") {
      callback();
    }
  };

  const handleSaveName = () => {
    setName(nameRef.current?.value as string);
    setStep(2);
  };

  const handleSaveTitle = () => {
    setTitle(titleRef.current?.value as string);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          {step1 && (
            <Button
              disabled={!name}
              rightIcon={<ArrowForwardIcon />}
              onClick={handleSaveName}
            >
              Next
            </Button>
          )}
          {step2 && (
            <Button
              disabled={!title}
              rightIcon={<CheckIcon />}
              onClick={handleSaveTitle}
            >
              Save
            </Button>
          )}
        </>
      }
      title="Welcome!"
    >
      {step1 && (
        <Input
          ref={nameRef}
          placeholder="Tell us your name"
          onKeyDown={(event) => onEnter(event, handleSaveName)}
          autoFocus={true}
        />
      )}
      {step2 && (
        <Input
          ref={titleRef}
          placeholder="Your job title?"
          onKeyDown={(event) => onEnter(event, handleSaveTitle)}
          autoFocus={true}
        />
      )}
    </Modal>
  );
};
