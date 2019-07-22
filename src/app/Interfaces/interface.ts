export interface RootObject {
  results: Result[];
  info: Info;
}

interface Info {
  seed: string;
  results: string;
  page: string;
  version: string;
  time: Time;
  user: User;
}

interface User {
  username: string;
  tier: string;
  results: string;
  remaining: string;
}

interface Time {
  instruct: number;
  generate: number;
}

export interface Result {
  name: string;
  las: string;
  email: string;
  age: number;
  role: number;
  phone: string;
  photo: string;
  created: string;
  lorem: string;
}
