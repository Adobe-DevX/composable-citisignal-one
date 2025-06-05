import {
  h, Component, Fragment, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';
import { performCatalogServiceQuery } from '../../scripts/commerce.js';

const html = htm.bind(h);

const productPlansQuery = `
  query getProducts($categoryId: String!) {
    products(filter: { category_id: { eq: $categoryId } }) {
      items {
        sku
        name
        description {
          html
        }
        image {
          url
          label
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

class ProductPlans {
  constructor(categoryId) {
    this.state = {
      products: [],
      loading: true
    };
    this.categoryId = categoryId;
  }

  async componentDidMount() {
    try {
      const response = await performCatalogServiceQuery(productPlansQuery, {
        categoryId: this.categoryId
      });
      
      if (response?.data?.products?.items) {
        this.setState({ products: response.data.products.items, loading: false });
      }
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
    const { sku, name, description, image, price_range } = product;
    const price = price_range?.minimum_price?.regular_price?.value;
    const currency = price_range?.minimum_price?.regular_price?.currency;

    return `
      <div class="product-card">
        ${image ? `<img class="product-image" src="${image.url}" alt="${image.label || name}" />` : ''}
        <div class="product-content">
          <h3 class="product-name">${name}</h3>
          ${description?.html ? `<div class="product-description">${description.html}</div>` : ''}
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
  
  // Get categoryId from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('categoryId') || config.categoryId;

  if (!categoryId) {
    console.error('Category ID is required for product plans block');
    return;
  }

  block.textContent = '';
  block.classList.add('product-plans');
  
  const productPlans = new ProductPlans(categoryId);
  productPlans.componentDidMount();
} 