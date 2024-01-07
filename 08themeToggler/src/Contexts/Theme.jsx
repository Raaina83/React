import { createContext, useContext } from "react";

export const ThemeContext = createContext({ //can have states, variables, methods
    themeMode: "light", //variable
    darkTheme: () => {}, //method-->can be defined later according to the need by using useContext
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){ //directly returns useContext, no need to do these steps again and again
    return useContext(ThemeContext)
}