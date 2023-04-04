export default class GumroadVerifyAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.gumroad.com/v2/verify';
  }

  async verifyReceipt(productPermalink, receipt) {
    const url = `${this.baseURL}/${productPermalink}/${receipt}`;
    const response = await this._makeRequest(url);
    return response;
  }

  async _makeRequest(url) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    return data;
  }
}
