export const printCharacters = (str: string, index: number = 0): void => {
    // if (index < str.length) {
    //   console.log(str[index]);
    //   printCharacters(str, index + 1);
    // }

    for (let char of str) {
      console.log(char);
    }
  };