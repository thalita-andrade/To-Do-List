export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--default-primary": "#8675b8",
    "--default-secundary": "#6142bd",
    "--default-tertiary": "#beb0e7",
    "--default-quarternary": "white",
    "--default-quinary": "#f1f3f4",
    "--default-senary": "#5f49a0",
    "--default-shadow-table": "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    "--default-shadow-scrollbar": "inset 0 0 3px grey",
  }
}

export const dark: Theme = {
  name: "dark",
  properties: {
    "--default-primary": "#41474d",
    "--default-secundary": "darkgrey",
    "--default-tertiary": "lightgrey",
    "--default-quarternary": "black",
    "--default-quinary": "grey",
    "--default-senary": "#35393d",
    "--default-shadow-table": "0px 3px 1px -2px rgba(255, 255, 255, 0.2), 0px 2px 2px 0px rgba(255, 255, 255, 0.14), 0px 1px 5px 0px rgba(255, 255, 255, 0.12)",
    "--default-shadow-scrollbar": "inset 0 0 5px whitesmoke",
  }
}