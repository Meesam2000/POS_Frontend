import { NotFound } from './pages/not-found';
import Authentication from './pages/Authentication';
import ForgotPassword from './pages/ForgotPassword';
import AddProduct from './pages/addProduct/AddProduct'
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from './pages/profile/Profile'
import Category from './pages/addCategory/AddCategory'
import LandingPage from './pages/landingPage/LandingPage.jsx'
import { Navigate } from 'react-router-dom'
import PosScreen from './pages/posPanel/PosScreen';
import OrderPanel from './pages/orders/OrderPanel';
import ReverseOrderPanel from './pages/reverseOrders/ReverseOrderPanel';

function isLoggedIn ( ) {
  const token = localStorage.getItem('token')
  // console.log("token "+ (token ? true : false));
  return token ? true : false
}

function authentication (Component) {
  return isLoggedIn() ? Component : <Navigate to="/register" />
}

const rawRoutes = [
  {
    path: '/',
    element: <LandingPage></LandingPage>
  },
  {
    path: '/register',
    element: <Authentication />
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    requiresAuth: true
  },
  {
    path: '/dashboard/home',
    element: <Dashboard />,
    requiresAuth: true
  },
  {
    path: '/dashboard/posePanel',
    element: <PosScreen></PosScreen>,
    requiresAuth: true
  },
  {
    path: '/dashboard/orders',
    element: <OrderPanel></OrderPanel>,
    requiresAuth: true
  },
  {
    path: '/dashboard/reverseOrders',
    element: <ReverseOrderPanel></ReverseOrderPanel>,
    requiresAuth: true
  },
  {
    path: '/dashboard/addCategory',
    element: <Category />,
    requiresAuth: true
  },
  {
    path: '/dashboard/addProduct',
    element: <AddProduct />,
    requiresAuth: true
  },
  {
    path: '/dashboard/profile',
    element: <Profile />,
    requiresAuth: true
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/account/confirm/:confirmationCode',
    element: <Authentication></Authentication>
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword></ForgotPassword>
  }
];


export const routes = rawRoutes.map(route => ({
  ...route,
  element: route.requiresAuth ? authentication(route.element) : route.element
}))