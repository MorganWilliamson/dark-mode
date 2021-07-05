import React from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    //remember to keep values generic. This is meant to be reusable.
    const [value, setValue] = useLocalStorage(key, initialValue);
    return [value, setValue]
}