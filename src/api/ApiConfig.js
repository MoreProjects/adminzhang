/**
 * API config for PC/Client
 */
import MobileDetect from 'mobile-detect';

let apiBaseUrl;
let apiSpecialUrl;
let apiSandboxUrl;

const clientPrefix = '';
const rootUrl = '/FHH/EM0Hgongzi';
const baseUrl = '/mobileApi';
const specialUrl = '/mobileOutApi';
const SandboxUrl = '/gray';


const MobileClientObj = new MobileDetect(window.navigator.userAgent);
const isMobileClient = MobileClientObj.mobile() ? true : false;

apiBaseUrl = isMobileClient ? [clientPrefix, rootUrl, baseUrl].join('') : [rootUrl, baseUrl].join('');

apiSpecialUrl = isMobileClient ? [clientPrefix, rootUrl, specialUrl].join('') : [rootUrl, specialUrl].join('');

apiSandboxUrl = isMobileClient ? [clientPrefix, rootUrl, SandboxUrl].join('') : [rootUrl, SandboxUrl].join('');

export { apiBaseUrl, apiSpecialUrl, apiSandboxUrl, isMobileClient };