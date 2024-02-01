import { setItemsCookie } from "./actions";
import { type ProcessedLink } from "./definitions";

/**
 * Set Processed Links to local storage.
 */
export const setLocalStorage = (state: ProcessedLink[]) => {
  try {
    const serialLinks = JSON.stringify(state);
    localStorage.setItem("links", serialLinks);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get Processed Links from local storage.
 */
export const getLocalStorage = () => {
  try {
    const lsLinks = JSON.parse(localStorage.getItem("links")!);
    if (!lsLinks) return;

    return lsLinks as ProcessedLink[];
  } catch (err) {
    return undefined;
  }
};

/**
 * Client-side helper function for creating "item" cookie
 */
export const createCookie = async (val: number) => {
  try {
    await setItemsCookie(val);
  } catch (err) {
    console.log("Could not create cookie");
  }
};
