// #SCSS
function transformTokens(tokens) {
  return Object.keys(tokens).map((key) => ({
    name: `$${key}`,
    value: `${tokens[key].value}rem`,
  }));
}

const transformedTokens = transformTokens(tokens);
