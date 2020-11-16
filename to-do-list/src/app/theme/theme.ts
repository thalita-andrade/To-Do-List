export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--default-primary":  "#8675b8",
        "--default-secundary":  "#6142bd",
        "--default-tertiary":  "#beb0e7",
        "--default-quarternary": "white",
        "--default-quinary": "#f1f3f4",
    }
}

export const dark: Theme = {
    name: "dark",
    properties: {
        "--default-primary": "grey",
        "--default-secundary":  "darkgrey",
        "--default-tertiary": "lightgrey",
        "--default-quarternary": "black",
        "--default-quinary": "#41474d",
    }
}