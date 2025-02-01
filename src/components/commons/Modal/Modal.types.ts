export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
}
