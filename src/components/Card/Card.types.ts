import { MODAL_MODES } from "@/constants";

export interface CardProps {
  id: string;
}

export type ModalMode = keyof typeof MODAL_MODES;
