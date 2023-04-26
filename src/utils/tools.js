export const tool = {
  imgSrc: (url) => {
    return new URL(`../img/${url}`, import.meta.url).href;
  },

  debounce: (fn, delay) => {
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, delay);
    };
  },
};
