/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignUp } from '@dropins/storefront-auth/containers/SignUp.js';
import { SuccessNotification } from '@dropins/storefront-auth/containers/SuccessNotification.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { getCookie } from '../../scripts/configs.js';
import { h } from '../../scripts/preact.js';

export default function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (isAuthenticated) {
    window.location.href = '/us/en/customer/account';
  } else {
    authRenderer.render(SignUp, {
      hideCloseBtnOnEmailConfirmation: true,
      routeSignIn: () => '/us/en/customer/login',
      routeRedirectOnSignIn: () => '/us/en/customer/account',
      successNotificationForm: (userName) => h(SuccessNotification, {
        headingText: `Welcome ${userName}!`,
        messageText: 'Your account has been successfully created.',
        primaryButtonText: 'My Account',
        secondaryButtonText: 'Logout',
        onPrimaryButtonClick: () => {
          window.location.href = '/us/en/customer/account';
        },
        onSecondaryButtonClick: async () => {
          await authApi.revokeCustomerToken();
          window.location.href = '/';
        },
      }),
    })(block);
  }
}
