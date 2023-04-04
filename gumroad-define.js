export default class GumroadDefineAPI {
  constructor() {
    this.emptyProduct = {
      name: '',
      permalink: '',
      price: '',
      currency: 'USD',
      description: '',
      url: '',
      require_shipping: false,
      shipping_profile_id: null,
      trial_days: null,
      custom_receipt: null,
      tax_included: false,
      allow_multiple_purchases: true,
      maximum_purchase_count: null,
      maximum_purchase_count_per_order: null,
      requires_tos_acceptance: false,
      disable_refunds: false,
      requires_tos_acceptance_text: '',
      custom_fields: [],
      variants: [],
    };
  }
}