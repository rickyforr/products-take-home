const noSpecialCharacters = /^[^*|\":<>[\]{}`\\()';@&$]+$/;

const validateSearchInput = (input: string) => {
  return noSpecialCharacters.test(input);
};

export { validateSearchInput };
