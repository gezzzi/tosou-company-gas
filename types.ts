export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface WorkExample {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}