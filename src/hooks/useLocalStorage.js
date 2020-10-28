import { useState } from "react";

//Function should return an item from local storage, as long as that item exists.
export const useLocalStorage = (key, initialValue) => {
    //set state
    const [storedValue, setStoredValue] = useState(() => {
        //get item from local storage using its key
        const item = window.localStorage.getItem(key);
        //return stored object (JSON.parse) or return initialValue if the stored object is undefined
        return item ? JSON.parse(item) : initialValue;
    });

    
    //The below function sets value to whatever is stored locally, based on the key that it's given.
    //This also updates the state of storedValue with the appropriate value. 
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    } 

    return [storedValue];
}