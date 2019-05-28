

export const randInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const randIndex = arr => Math.floor(Math.random() * arr.length);
