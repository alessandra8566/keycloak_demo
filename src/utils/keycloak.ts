import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keycloak.alessandra8566.com",
  realm: "demo",
  clientId: "demo",
});

export default keycloak;
