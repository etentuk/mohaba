import { store } from "@risingstack/react-easy-state";
import { Experiment } from "./ entities/types";

const initialExperiment: Experiment = {
  participant: {
    gender: "",
    ageRange: "",
  },
  genderSelectionSong: { name: "", url: "" },
  songs: [],
  snack: "",
  meal: "",
  mental: { alertness: "", energy: "", excitement: "", sleep: "" },
  musicSpeed: "slow",
};

const appState = store({
  currentStep: 0,
  experiment: {
    ...initialExperiment,
  },
});

export default appState;
