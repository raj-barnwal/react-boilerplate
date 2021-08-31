import axios from 'axios';
import { serialize, replaceStringWithParams } from '../services/commonUtils';

export function AxiosService(obj) {
  const _that = this;

  (function __construct(obj) {
    _that.headers = obj.headers;
    _that.params = obj.params || {};
    _that.method = obj.method.toLowerCase();
    _that.url = obj.url;
    _that.isSerialize = obj.isSerialize || null;
  }(obj));

  this.setHeaders = setHeaders;
  this.setParams = setParams;
  this.get = handleGet;
  this.post = handlePost;
  this.all = handleAll;
  this.doAjax = doAjax;
  this.doAjaxPost = doAjaxPost;

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  if(!window.axios_source){
    window.axios_source = [];
  }
  window.axios_source.push(source);

  function doAjax() {
    try {
      delete _that.params.catalog_tag_filter;
    } catch (e) {
      console.log('tatasky_B2BPortal api service');
    }


    const data = _that.params;
    const convertParamsToUpdateUrl = {};
    Object.keys(data).forEach(i => {
      convertParamsToUpdateUrl[`{${i}}`] = data[i];
    });
    let url = replaceStringWithParams(_that.url, convertParamsToUpdateUrl);
    if (_that.method === 'get') {
      if (_that.params && Object.keys(_that.params).length > 0) {
        url += `?${serialize(_that.params)}`;
      }
    }

    return axios({
      method: _that.method,
      url,
      headers: Object.assign({}, _that.headers), // weired cannot directly pass _that.headers as it doesn't reflect, need to figure it out later.
      data,
      cancelToken: source.token,
    });
  }

  function doAjaxPost(){
    return axios({
      method: _that.method,
      url : _that.url,
      headers: Object.assign({}, _that.headers), // weired cannot directly pass _that.headers as it doesn't reflect, need to figure it out later.
      data: _that.params,
      cancelToken: source.token,
    });
  }

  function setParams(obj) {
    if (obj) {
      Object.keys(obj).forEach(i => {
        this.params[i] = obj[i];
      });
    }
  }

  function setHeaders(key, val) {
    this.headers[key] = val;
  }

  function handleGet() {
    this.doAjax('get');
  }

  function handlePost() {
    this.doAjax('post');
  }

  function handleAll(promises) {
    return axios.all(promises);
  }
}
