export const getQueryString = (key) => {
  return new URLSearchParams(window.location.search).get(key);
};
