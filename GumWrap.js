import GumroadAPI from './gumroad.js';
import GumroadVerifyAPI from './gumroad-verify.js';
import GumroadProductAPI from './gumroad-product.js';
import GumroadDefineAPI from './gumroad-define.js';
import GumroadLicenseAPI from './gumroad-license.js';

const GumWrap = (apiKey) => ({
  gumroad: new GumroadAPI(apiKey),
  gumroadVerify: new GumroadVerifyAPI(apiKey),
  gumroadProduct: new GumroadProductAPI(apiKey),
  gumroadLicense: new GumroadLicenseAPI(apiKey),
  gumroadDefine: new GumroadDefineAPI(),
});

export default GumWrap;

