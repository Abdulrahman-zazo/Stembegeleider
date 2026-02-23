export interface ImageButton {
  id: string;
  label: string;
  modalTitle: string;
  modalContent: string;
  sounds?: string[];
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  image?: string;
  content?: string;
  sound?: string;
  button?: {
    label: string;
    action: 'cta' | 'doe' | 'quiz';
  };
  imageButtons?: ImageButton[];
  doeType?: 'quiz' | 'dragdrop';
  doeContent?: any;
}

export interface WelcomeSection {
  id: 'welcome';
  title: string;
  description: string;
  image?: string;
  button: {
    label: string;
    action: 'cta';
  };
  sound?: string;
}
