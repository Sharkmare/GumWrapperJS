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

  async revokeLicense(productPermalink, licenseKey) {
    const url = `${this.baseURL}/revoke`;
    const data = {
      product_permalink: productPermalink,
      license_key: licenseKey,
    };
    const response = await this._makeRequest(url, 'POST', data);
    return response;
  }

async getLicenseDetails(productPermalink, licenseKey) {
  const url = `${this.baseURL}/details`;
  const data = {
    product_permalink: productPermalink,
    license_key: licenseKey,
  };
  const response = await this._makeRequest(url, 'POST', data);
  return response;
}

async reissueLicense(productPermalink, licenseKey, email) {
  const url = `${this.baseURL}/reissue`;
  const data = {
    product_permalink: productPermalink,
    license_key: licenseKey,
    email: email,
  };
  const response = await this._makeRequest(url, 'POST', data);
  return response;
}

async generateLicense(productPermalink, email, expiresInDays = null) {
  const url = `${this.baseURL}/generate`;
  const data = {
    product_permalink: productPermalink,
    email: email,
    expires_in_days: expiresInDays,
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
