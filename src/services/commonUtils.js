export const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      timeoutId = null;
      fn(...args);
    }, delay);
  };
}

export const sortArray = (data) => {
  return data.sort(function (a, b) {
    if (a.serialNo < b.serialNo) return -1;
    if (a.serialNo > b.serialNo) return 1;
    return 0;
  });
};

export const numberWithCommas = (x=0) => {
  return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
};

export const formatString = (string) => {
  return string.replace(/_/g," ")
};

export const scrollPage = () => {
  return window.scrollTo(0, 0);
};


