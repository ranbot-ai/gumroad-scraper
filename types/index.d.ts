export interface IConfig {
  name: string;
  domain: string;
  user_agent: string;
  headless: boolean;
  devtools: boolean;
  timeout: number;
  max_tries: number;
}

export interface IIdentifier {
  category: string;
}

export interface IQueueItem {
  tries: number;
  identifier: Identifier;
}
