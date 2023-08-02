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

/* Helper function that returns the correct palette string for the element based on the index and type */
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