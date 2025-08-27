export const authConfig = {
  clientId: "fitness-app-client",
  authorizationEndpoint:
    "http://localhost:8081/realms/fitness-oauth2/protocol/openid-connect/auth",
  tokenEndpoint:
    "http://localhost:8081/realms/fitness-oauth2/protocol/openid-connect/token",
  redirectUri: "http://localhost:5173/",
  scope: "openid profile email offline_access",
  extraAuthParams: {
    prompt: "login",   // 👈 forces Keycloak to always show the login page
  },
  onRefreshTokenExpire: (event) => event.logIn(),
};
