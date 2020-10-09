export type RuleType =
  | "string"
  | "number"
  | "boolean"
  | "method"
  | "regexp"
  | "integer"
  | "float"
  | "object"
  | "enum"
  | "date"
  | "url"
  | "hex"
  | "array"
  | "email";

type Music = {
  name: string;
  url: string;
};

export type Participant = {
  gender: string;
  ageRange: string;
};

export type Mental = {
  alertness: string;
  energy: string;
  excitement: string;
  sleep: string;
};

export type Experiment = {
  participant: Participant;
  genderSelectionSong: Music;
  songs: Music[];
  snack: string;
  meal: string;
  mental: Mental;
  musicSpeed: "slow" | "fast";
};
