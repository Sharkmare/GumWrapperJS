export default class GumroadCustomerAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.gumroad.com/v2/customers';
    }

    async listPurchases(customerID) {
        const url = `${this.baseURL}/${customerID}/purchases`;
        const response = await this._makeRequest(url);
        return response;
    }

    async listLicenses(customerID) {
        const url = `${this.baseURL}/${customerID}/licenses`;
        const response = await this._makeRequest(url);
        return response;
    }

    async refundPurchase(customerID, productPermalink) {
        const url = `${this.baseURL}/${customerID}/refund`;
        const data = {
            product_permalink: productPermalink,
        };
        const response = await this._makeRequest(url, 'POST', data);
        return response;
    }

    async listCustomers(productPermalink) {
        const url = `${this.baseURL}?product_permalink=${productPermalink}`;
        const response = await this._makeRequest(url);
        return response;
    }

    async createCustomer(email, name = null, shippingAddress = null) {
        const url = `${this.baseURL}`;
        const data = {
            email: email,
            name: name,
            shipping_address: shippingAddress,
        };
        const response = await this._makeRequest(url, 'POST', data);
        return response;
    }

    async updateCustomer(customerID, dataToUpdate) {
        const url = `${this.baseURL}/${customerID}`;
        const data = {
            data: dataToUpdate,
        };
        const response = await this._makeRequest(url, 'PUT', data);
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