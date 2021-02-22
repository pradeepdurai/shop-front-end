import React from 'react';
import {Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashboard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import Home from "./core/Home";
import Signin from './user/Signin';
import Signup from './user/Signup';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';

const Routes = () => {
  return (
   <BrowserRouter>
   <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/signup" exact component={Signup}/>
       <Route path="/signin" exact component={Signin}/>
       <PrivateRoute  path="/user/dashboard" exact component={UserDashboard}/>
       <AdminRoute  path="/admin/dashboard" exact component={AdminDashBoard}/>
       <AdminRoute  path="/admin/create/category" exact component={AddCategory}/>
       <AdminRoute  path="/admin/categories" exact component={ManageCategories}/>
       <AdminRoute  path="/admin/create/product" exact component={AddProduct}/>

   </Switch>
   </BrowserRouter>
  )
}

export default Routes;