import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./utils/keycloak";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const comp = await import("@/pages/login");
      return { Component: comp.default };
    },
  },
  {
    path: "/personal",
    async lazy() {
      const comp = await import("@/pages/personal");
      return { Component: comp.default };
    },
  },
]);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log("onKeycloakTokens", tokens);
};

function App() {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ReactKeycloakProvider>
  );
}

export default App;
