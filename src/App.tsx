import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const comp = await import("@/pages/login")
      return { Component: comp.default }
    },
  },
  {
    path: "/personal",
    async lazy() {
      const comp = await import("@/pages/personal")
      return { Component: comp.default }
    },
  },
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
