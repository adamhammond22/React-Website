/* helperFunctions.js holds a variety of helper functions to de-clutter various modules */

import { allLinks } from "./App";

/* setItemAsync takes a key and value, and asynchronously sets the storage.
  this is used for storing the theme mode */
export function setLocalstorageItemAsync(key, value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve(); // Resolve the Promise when the value is successfully set
      } catch (error) {
        reject(error); // Reject the Promise if an error occurs
      }
    });
}

/* Helper function that returns the correct palette string for the element based on the index and type.
  this is used for Projects to render the desired color for the panels.*/
/* valid types: main, contrastText, or icon */
export function leftOrRightColor(index, type) {
  if (index%2 === 0)
    if (type !== 'icon') {
      return 'ProjectLeftPanel.' + type
    } else {
      return 'ProjectLeftIcon'
    }
  else {
    if (type !== 'icon') {
      return 'ProjectRightPanel.' + type
    } else {
      return 'ProjectRightIcon'
    }
  }
}

/* Helper function that copies the email address to the clipboard  */
export const handleCopyEmailToClipboard = () => {
  console.log("called copy to clippie")
  // Use the Clipboard API to copy text to the clipboard
  navigator.clipboard.writeText(allLinks.email).then(
    () => {
      alert('Text copied to clipboard!');
    },
  );
};