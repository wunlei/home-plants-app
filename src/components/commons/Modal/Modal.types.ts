export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}
