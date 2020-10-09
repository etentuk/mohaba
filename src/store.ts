import { store } from "@risingstack/react-easy-state";
import { Experiment } from "./ entities/types";
import { db } from "./firebase";

const initialExperiment: Experiment = {
  participant: {
    gender: "",
    ageRange: "",
  },
  testSong: { name: "", url: "" },
  songs: [],
  snack: "",
  meal: "",
  mental: { alertness: "", energy: "", excitement: "", sleep: "" },
  musicSpeed: "slow",
};

const defaultPages = [
  { name: "participant", valid: false },
  { name: "music", valid: false },
  { name: "snackMenu", valid: false },
  { name: "mealMenu", valid: false },
  { name: "mentalAwareness", valid: false },
];

const appState = store({
  currentStep: 0,
  leftDisabled: true,
  pages: [...defaultPages],
  experiment: {
    ...initialExperiment,
  },
  resetExperiment: () => {
    appState.experiment = { ...initialExperiment };
    appState.pages = [...defaultPages];
  },

  getSongs: async () => {
    const rawData = await db
      .collection("experiments")
      .doc("AQzgeLyZhRnwvW31R7UD")
      .get();
    const data = rawData.data();
    if (data.fastExperiments === data.slowExperiments) {
      appState.experiment.songs = data.fastSongs;
      appState.experiment.musicSpeed = "fast";
      appState.experiment.testSong = { ...data.slowSongs[0] };
    } else {
      appState.experiment.songs = data.slowSongs;
      appState.experiment.musicSpeed = "slow";
      appState.experiment.testSong = { ...data.fastSongs[0] };
    }
  },
});

export default appState;
