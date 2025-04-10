export const GOOGLE_AUTH_CONFIG = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  redirectUri: import.meta.env.VITE_API_URL + '/auth/google/callback',
  scope: 'email profile',
};

export const initializeGoogleAuth = (callback) => {
  if (window.google) {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_AUTH_CONFIG.clientId,
      callback: callback,
      auto_select: false,
      redirect_uri: GOOGLE_AUTH_CONFIG.redirectUri
    });
  }
};
