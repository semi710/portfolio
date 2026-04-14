import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#000000",
      scrollHandle: "#1a1a1a",
      scrollHandleHover: "#2a2a2a",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#e2e8f0",
        200: "#94a3b8",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#00ff9c",
      secondary: "#60fdff",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#76ff9f",
      },
    },
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#323232",
      scrollHandle: "#5b5b5b",
      scrollHandleHover: "#393939",
      primary: "#E1E48B",
      secondary: "#A5C260",
      text: {
        100: "#F7F7F7",
        200: "#EEEEEE",
        300: "#5b5b5b",
      },
    },
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#000000",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#E5E500",
      secondary: "#04A500",
      text: {
        100: "#01FF00",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  coffee: {
    id: "T_007",
    name: "coffee",
    colors: {
      body: "#1C1612",
      scrollHandle: "#3D3229",
      scrollHandleHover: "#5C4D3D",
      primary: "#D4A574",
      secondary: "#8B6914",
      text: {
        100: "#F5E6D3",
        200: "#C4A77D",
        300: "#8B7355",
      },
    },
  },
  gruvbox: {
    id: "T_008",
    name: "gruvbox",
    colors: {
      body: "#1d2021",
      scrollHandle: "#3c3836",
      scrollHandleHover: "#504945",
      primary: "#b8bb26",
      secondary: "#fb4934",
      text: {
        100: "#fbf1c7",
        200: "#ebdbb2",
        300: "#d5c4a1",
      },
    },
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#80D932",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
};

export default theme;
