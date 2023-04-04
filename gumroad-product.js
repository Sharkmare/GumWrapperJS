// gumroad-product.js

export default class GumroadProductAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.gumroad.com/v2/products';
  }

  async listProducts() {
    const url = `${this.baseURL}?per_page=1000`;
    const response = await this._makeRequest(url);
    return response;
  }

  async getProduct(permalink) {
    const url = `${this.baseURL}/${permalink}`;
    const response = await this._makeRequest(url);
    return response;
  }

  async createProduct(product) {
    const url = this.baseURL;
    const response = await this._makeRequest(url, 'POST', product);
    return response;
  }

  async updateProduct(permalink, product) {
    const url = `${this.baseURL}/${permalink}`;
    const response = await this._makeRequest(url, 'PUT', product);
    return response;
  }

  async deleteProduct(permalink) {
    const url = `${this.baseURL}/${permalink}`;
    const response = await this._makeRequest(url, 'DELETE');
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
