import {
  Button,
  Modal as UIModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

type ModalProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export const Modal = ({
  children,
  footer,
  isOpen,
  onClose,
  title,
}: ModalProps) => {
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </UIModal>
  );
};
