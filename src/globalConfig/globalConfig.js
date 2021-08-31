import { API_PATH } from './apiPath';

const APP_VERSION = 1.0;
const API_ENV = (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? process.env.NODE_ENV : 'development';

const Settings = {
  APP_VERSION,
  API_ROOT: API_PATH[API_ENV].API_ROOT,
  S3_API_ROOT: API_PATH[API_ENV].S3_API_ROOT,
  PaymentTxnStatusCallBackTime: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? 2000 : 3000,
  PaymentTxnStatusCallBackIteration: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? 10 : 36,
  API_ERROR: 0,
  API_SUCCESS: 1,
  MESSAGES_TYPES: {
    TRUE: true,
    FALSE: false,
    SUCCESS: 'SUCCESS',
    PENDING: 'PENDING',
    IN_PROGRESS: 'INPROGRESS',
    FAIL: 'FAIL'
  },
  serverError: 'Something went wrong. Please try again later',
  DEFAULT_DATE_FORMAT: 'DD MMM YYYY',
  getHeaders(headers) {
    const HEADERS = {
      JSON: {
        'Content-Type': 'application/json',
      },
      URL_ENCODED: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      MULTIPART_FORM_DATA: {
        'Content-Type': 'multipart/form-data',
      },
      TEXT_HTML: {
        'Content-Type': 'text/html',
      },

    };
    function getHeaders() {
      let headerObj = [];
      Object.keys(headers).forEach(key => {
        const header = HEADERS[headers[key]];
        headerObj = Object.assign(headerObj, header);
      });
      return headerObj;
    }
    return getHeaders();
  }
};

export default Settings;
