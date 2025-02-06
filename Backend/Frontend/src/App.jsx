import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminJobs from "./components/admincomponent/AdminJobs.jsx";
import Applicants from "./components/admincomponent/Applicants";
import Companies from "./components/admincomponent/Companies";
import CompanyCreate from "./components/admincomponent/CompanyCreate";
import CompanySetup from "./components/admincomponent/CompanySetup";
import PostJob from "./components/admincomponent/PostJob";
import ProtectedRoute from "./components/admincomponent/ProtectedRoute";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Browse from "./components/components_lite/Browse.jsx";
import ContactUs from "./components/components_lite/Contact.jsx";
import Description from "./components/components_lite/Description.jsx";
import Home from "./components/components_lite/Home";
import Jobs from "./components/components_lite/Jobs.jsx";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import Profile from "./components/components_lite/Profile.jsx";
import TermsofService from "./components/components_lite/TermsofService.jsx";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsofService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },

  // /admin
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        {" "}
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        {" "}
        <PostJob />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },

  // //contact us
  {
    path: "/Contact",
    element: <ContactUs />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
