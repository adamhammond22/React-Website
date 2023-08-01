/* helperFunctions.js holds micelanneous helper functions to de-clutter various modules */

/* setItemAsync takes a key and value, and asynchronous */
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