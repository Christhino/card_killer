import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import Page from '../layouts/page';
export default function PrivateRoute() {
  const { user } = useAuth()
  return user ? <Page/> : <Navigate to='/auth/login'/>
}
