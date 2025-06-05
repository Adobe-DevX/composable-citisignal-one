import {
  h, Component, Fragment, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { readBlockConfig } from '../../scripts/aem.js';
import { performCatalogServiceQuery } from '../../scripts/commerce.js';

const html = htm.bind(h);

const productPlansQuery = `query ProductPlansQuery($categoryId: String!) {
  productSearch(
    phrase: "",
    filter: { attribute: "categoryIds", eq: $categoryId },
    current_page: 1,
    page_size: 12
  ) {
    items {
      productView {
        sku
        name
        description
        images(roles: "thumbnail") {
          url
        }
        ... on SimpleProductView {
          price {
            regular {
              amount {
                value
                currency
              }
            }
            final {
              amount {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
}`;

class ProductPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const { categoryId } = this.props;
      const response = await performCatalogServiceQuery(productPlansQuery, { categoryId });
      this.setState({
        products: response.productSearch.items,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching product plans:', error);
      this.setState({ loading: false });
    }
  }

  renderProductCard(product) {
    const { productView } = product;
    const price = productView.price?.final?.amount?.value || productView.price?.regular?.amount?.value;
    const currency = productView.price?.final?.amount?.currency || productView.price?.regular?.amount?.currency;

    return html`
      <div class="product-card">
        <div class="product-image">
          <img src="${productView.images[0]?.url}" alt="${productView.name}" loading="lazy" />
        </div>
        <div class="product-content">
          <h3 class="product-name">${productView.name}</h3>
          <p class="product-description">${productView.description || ''}</p>
          <div class="product-price">
            ${price ? html`<span class="price">${currency} ${price}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return html`
        <div class="product-plans loading">
          ${Array(3).fill().map(() => html`
            <div class="product-card shimmer">
              <div class="product-image shimmer"></div>
              <div class="product-content">
                <div class="product-name shimmer"></div>
                <div class="product-description shimmer"></div>
                <div class="product-price shimmer"></div>
              </div>
            </div>
          `)}
        </div>
      `;
    }

    return html`
      <div class="product-plans">
        ${products.map((product) => this.renderProductCard(product))}
      </div>
    `;
  }
}

export default async function decorate(block) {
  const config = readBlockConfig(block);
  const { categoryId } = config;

  if (!categoryId) {
    console.error('Category ID is required for product plans block');
    return;
  }

  block.textContent = '';
  const app = html`<${ProductPlans} categoryId=${categoryId} />`;
  render(app, block);
} 