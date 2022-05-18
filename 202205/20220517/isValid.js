/**
 * @param {String} code
 * @return {Boolean}
 */
function isValid(code){
  const openersToClosers = { '(': ')', '[': ']', '{': '}' };
  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);
  
  const openersStack = [];
    
  for (let i = 0; i < code.length; i++) {
    let char = code.charAt(i);
    if (openers.has(char)) {
      openersStack.push(char);
    }else if(closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }
      const lastUnclosedOpener = openersStack.pop();
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0; 
}