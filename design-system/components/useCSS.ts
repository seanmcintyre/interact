export function useCSS(strs: TemplateStringsArray, ...exprs: any[]) {
  const styles = strs
    .map((str, i) => trim(str) + trim(exprs[i] || ''))
    .join('');

  // create CSS variables from expressions
  const cssObj = createCSSVar(styles);
  // console.log({ cssVars });
  // console.log({ cssObj });

  // create className for styleSet
  const className = UID();

  // replace property values with css vars
  // const stylesWithVars = processStyles(styles);

  // add new class to styleSheet
  document.styleSheets[0].insertRule(`.${className} { ${styles} }`);

  return { className };
}

const css2obj = (css: string) => {
  const regex = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g;
  const replace = (_: any, prop: any, val: any) => (obj[prop] = val);
  const obj = {};

  css.replace(regex, replace);

  return obj;
};

function trim(str: string) {
  return str?.replace(/\s+/g, '') || '';
}

const cssVars = { raw: [], vars: {} };

function createCSSVar(styles) {
  const cssObj = css2obj(styles);

  const cssVarSetInit = (key, val) => (cssVars[key] = [val]);
  const cssVarSetAdd = (key, val) => cssVars[key].push(val);

  for (let key in cssObj)
    !!cssVars[key]
      ? cssVarSetAdd(key, cssObj[key])
      : cssVarSetInit(key, cssObj[key]);

  for (let key in cssVars) {
    if (key !== 'raw' && key !== 'vars')
      cssVars[key].map((val: string, i: number) => {
        const cssVar = `--${key}-${i}`;
        cssVars.raw.push(`${cssVar}: ${val}`);
        cssVars.vars[cssVar] = val;
      });
  }

  return { modern: cssVars.vars, legacy: cssObj };
}

function UID() {
  return 'css-' + Math.random().toString(36).substr(2, 5);
}
