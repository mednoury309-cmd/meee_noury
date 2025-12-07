export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  ERROR = 'error'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}
