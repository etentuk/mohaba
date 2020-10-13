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

const appState = store({
  currentStep: 0,
  leftDisabled: true,
  experiment: {
    ...initialExperiment,
  },
  fastExperiments: 0,
  slowExperiments: 0,
  getSongs: async () => {
    const rawData = await db
      .collection("experiments")
      .doc("AQzgeLyZhRnwvW31R7UD")
      .get();
    const data = rawData.data();
    appState.fastExperiments = data.fastExperiments;
    appState.slowExperiments = data.slowExperiments;

    if (appState.fastExperiments <= appState.slowExperiments) {
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
