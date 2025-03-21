/* eslint-disable import/no-cycle */
import { sampleRUM } from './aem.js';
import { getConfigValue } from './configs.js';
import { getConsent } from './scripts.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

// Load Commerce events SDK and collector
if (getConsent('commerce-collection')) {
  const config = {
    environmentId: await getConfigValue('commerce-environment-id'),
    environment: await getConfigValue('commerce-environment') === 'Production' ? 'prod' : 'non-prod',
    storeUrl: await getConfigValue('commerce-store-url'),
    websiteId: parseInt(await getConfigValue('commerce-website-id'), 10),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeId: parseInt(await getConfigValue('commerce-store-id'), 10),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewId: parseInt(await getConfigValue('commerce-store-view-id'), 10),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    websiteName: await getConfigValue('commerce-website-name'),
    storeName: await getConfigValue('commerce-store-name'),
    storeViewName: await getConfigValue('commerce-store-view-name'),
    baseCurrencyCode: await getConfigValue('commerce-base-currency-code'),
    storeViewCurrencyCode: await getConfigValue('commerce-base-currency-code'),
    storefrontTemplate: 'Franklin',
    datastreamId: '7f79ee17-c891-48de-97cc-6c089af8b112',
    imsOrgId: 'F5D946765D932A520A495C18@AdobeOrg',
  };

  window.adobeDataLayer.push(
    { storefrontInstanceContext: config },
    { aepContext: { datastreamId: config.datastreamId, imsOrgId: config.imsOrgId } },
    { eventForwardingContext: { commerce: true, aep: true } },
  );

  // Load events SDK and collector
  import('./commerce-events-sdk.js');
  import('./commerce-events-collector.js');
}
