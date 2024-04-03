import
{
  HomeLayout,
  LandingPage,
  Error,
  Academics,
  Alumni,
  News,
  Contact,
  Campuses,
  Admission,
  Skype
} from './pages'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router =createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: < Error />,
    children: [
      {
        index:true,
        element: <LandingPage />
      },
      {
        path: 'university/admission',
        element: <Admission />
      },
      {
        path: 'university/academics',
        element: <Academics />
      },
      {
        path: 'university/news',
        element: <News />
      },
      {
        path: 'university/alumni',
        element: <Alumni />
      },
      {
        path: 'university/contact',
        element: <Contact />
      },
      {
        path: 'university/campuses',
        element: <Campuses />
      },
      {
        path: 'university/skype',
        element: <Skype />
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App