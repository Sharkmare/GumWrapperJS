import GumroadAPI from './gumroad.js';
import GumroadVerifyAPI from './gumroad-verify.js';
import GumroadProductAPI from './gumroad-product.js';
import GumroadDefineAPI from './gumroad-define.js';

const GumWrap = (apiKey) => ({
  gumroad: new GumroadAPI(apiKey),
  gumroadVerify: new GumroadVerifyAPI(apiKey),
  gumroadProduct: new GumroadProductAPI(apiKey),
  gumroadDefine: new GumroadDefineAPI(),
});

export default GumWrap;

