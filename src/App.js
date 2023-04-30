import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeaderComponent } from './components/Header'
import { Body } from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import Menu from './components/Menu'
// const heading = React.createElement(
//   'h1',
//   {
//     id: 'title',
//   },
//   'Heading 1'
// )
// const heading2 = React.createElement(
//   'h1',
//   {
//     id: 'title',
//   },
//   'Heading 2'
// )
// const container = React.createElement('div', { id: 'container' }, [
//   heading,
//   heading2,
// ])

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: 'resturant/:id',
        element: <Menu />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
