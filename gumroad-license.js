export default class GumroadLicenseAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.gumroad.com/v2/licenses';
  }

  async verifyLicense(productPermalink, licenseKey) {
    const url = `${this.baseURL}/verify`;
    const data = {
      product_permalink: productPermalink,
      license_key: licenseKey,
    };
    const response = await this._makeRequest(url, 'POST', data);
    return response;
  }

  async _makeRequest(url, method = 'GET', body = {}) {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    return data;
  }
}
