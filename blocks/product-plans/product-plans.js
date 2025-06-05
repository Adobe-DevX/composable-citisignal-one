import {
  h, Component, Fragment, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { readBlockConfig } from '../../scripts/aem.js';
import { getProduct } from '../../scripts/commerce.js';

const html = htm.bind(h);

class ProductPlans {
  constructor(skus) {
    this.state = {
      products: [],
      loading: true
    };
    this.skus = skus;
  }

  async componentDidMount() {
    try {
      const productPromises = this.skus.map(sku => getProduct(sku));
      const responses = await Promise.all(productPromises);
      
      const products = responses
        .filter(response => response)
        .map(product => ({
          product,
          productView: product
        }));

      this.setState({ products, loading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      this.setState({ loading: false });
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  renderProductCard(product) {
    const { product: productData, productView } = product;
    
    // Price handling
    const price = productView?.price?.final?.amount?.value || 
                 productView?.price?.regular?.amount?.value || 
                 productData?.price_range?.minimum_price?.final_price?.value;
    const currency = productView?.price?.final?.amount?.currency || 
                    productView?.price?.regular?.amount?.currency || 
                    productData?.price_range?.minimum_price?.final_price?.currency;
    
    // Regular price for comparison if available
    const regularPrice = productView?.price?.regular?.amount?.value || 
                        productData?.price_range?.minimum_price?.regular_price?.value;
    const hasDiscount = regularPrice && price < regularPrice;

    // Image handling
    const imageUrl = productData?.image?.url || 
                    productData?.small_image?.url || 
                    productData?.thumbnail?.url || 
                    productView?.images?.[0]?.url;

    // URL construction
    const productUrl = productData?.url_key 
      ? `/${productData.url_key}`
      : `/products/${productData.sku}`;

    // Additional product details
    const shortDescription = productData?.short_description?.html || '';
    const stockStatus = productData?.stock_status || productView?.stock_status;
    const isInStock = stockStatus === 'IN_STOCK';
    const specialPrice = productData?.special_price || productView?.special_price;
    const brand = productData?.brand || productView?.brand;

    return `
      <a href="${productUrl}" class="product-card" data-product-sku="${productData.sku}">
        <div class="product-image-container">
          ${imageUrl ? `<img class="product-image" src="${imageUrl}" alt="${productData.name}" loading="lazy" />` : ''}
          ${hasDiscount ? '<div class="product-badge discount">Sale</div>' : ''}
          ${!isInStock ? '<div class="product-badge out-of-stock">Out of Stock</div>' : ''}
        </div>
        <div class="product-content">
          ${brand ? `<div class="product-brand">${brand}</div>` : ''}
          <h3 class="product-name">${productData.name}</h3>
          ${shortDescription ? `<div class="product-short-description">${shortDescription}</div>` : ''}
          ${productData.description?.html ? `<div class="product-description">${productData.description.html}</div>` : ''}
          <div class="product-price-container">
            ${hasDiscount ? `<div class="product-regular-price">${currency} ${regularPrice}</div>` : ''}
            <div class="product-price">${currency} ${price}</div>
            ${specialPrice ? `<div class="product-special-price">Special Price: ${currency} ${specialPrice}</div>` : ''}
          </div>
          ${productData.sku ? `<div class="product-sku">SKU: ${productData.sku}</div>` : ''}
        </div>
      </a>
    `;
  }

  render() {
    const { products, loading } = this.state;
    const container = document.querySelector('.product-plans');
    
    if (!container) return;

    if (loading) {
      container.classList.add('loading');
      container.innerHTML = Array(3).fill(`
        <div class="product-card">
          <div class="shimmer"></div>
        </div>
      `).join('');
      return;
    }

    container.classList.remove('loading');
    container.innerHTML = products.map(product => this.renderProductCard(product)).join('');
  }
}

export default function decorate(block) {
  const config = readBlockConfig(block);
  
  // Get SKUs from URL query parameters or block config
  const urlParams = new URLSearchParams(window.location.search);
  const skusParam = urlParams.get('skus');
  const skus = skusParam ? skusParam.split(',') : config.skus;

  if (!skus || !skus.length) {
    console.error('Product SKUs are required for product plans block');
    return;
  }

  block.textContent = '';
  block.classList.add('product-plans');
  
  const productPlans = new ProductPlans(skus);
  productPlans.componentDidMount();
} 