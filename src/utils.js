/**
 * omap({ a: 1, b: 2, c: 3 }, v => v * 2, ["b", "c"]);
 *   -> { a: 1, b: 4, c: 6 }
 */
const omap = (o, func, props) => {
  const result = {};
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    result[prop] = func ? func(o[prop]) : func;
  }
  return result;
};

const areSame = (a, b) => {
  // On the assumption that both have the same properties
  const props = Object.keys(b);
  let same = true;
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (a[prop] !== b[prop]) {
      same = false;
      break;
    }
  }
  return same;
};

const range = (minValue, value, maxValue) => {
  let r = value;
  r = min(r, maxValue);
  r = max(r, minValue);
  return r;
};

const max = (a, b) => {
  if (Number.isFinite(a)) {
    return Math.max(a, b);
  } else {
    return null;
  }
};

const min = (a, b) => {
  if (Number.isFinite(a)) {
    return Math.min(a, b);
  } else {
    return null;
  }
};

export default {
  omap,
  areSame,
  range,
  max,
  min
};
