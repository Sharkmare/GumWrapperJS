export default class GumroadAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.gumroad.com/v2';
  }

  async createSale(productPermalink, email, price, options = {}) {
    const url = `${this.baseURL}/sales`;
    const body = {
      product_permalink: productPermalink,
      email,
      price,
      ...options,
    };
    const response = await this._makeRequest(url, 'POST', body);
    return response;
  }

  async getSale(id) {
    const url = `${this.baseURL}/sales/${id}`;
    const response = await this._makeRequest(url);
    return response;
  }

  async _makeRequest(url, method = 'GET', body = {}) {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
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
