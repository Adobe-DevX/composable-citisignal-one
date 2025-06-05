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
    const price = productView?.price?.final?.amount?.value || 
                 productView?.price?.regular?.amount?.value || 
                 productData?.price_range?.minimum_price?.final_price?.value;
    const currency = productView?.price?.final?.amount?.currency || 
                    productView?.price?.regular?.amount?.currency || 
                    productData?.price_range?.minimum_price?.final_price?.currency;

    const imageUrl = productData?.image?.url || 
                    productData?.small_image?.url || 
                    productData?.thumbnail?.url || 
                    productView?.images?.[0]?.url;

    return `
      <div class="product-card">
        <div class="product-image-container">
          ${imageUrl ? `<img class="product-image" src="${imageUrl}" alt="${productData.name}" loading="lazy" />` : ''}
        </div>
        <div class="product-content">
          <h3 class="product-name">${productData.name}</h3>
          ${productData.description?.html ? `<div class="product-description">${productData.description.html}</div>` : ''}
          ${price ? `<div class="product-price">${currency} ${price}</div>` : ''}
        </div>
      </div>
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