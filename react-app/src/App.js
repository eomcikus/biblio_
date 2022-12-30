import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllBooks from './components/Books/AllBooks/allbooks'
import OneBook from './components/Books/currentbook';
import { FEBookForm } from './components/Books/BookForm/bookform';
import DeleteBook from './components/Books/deletebook';
import EditBook from './components/Books/EditBook';
import { Reviews } from './components/Reviews/Reviews';
import  ReviewForm  from './components/Reviews/ReviewForm'
import DeleteReview from './components/Reviews/DeleteReview';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route path='/books' exact={true}>
          <AllBooks />
          <FEBookForm />
        </Route>
        <Route path='/books/:bookId' >
          <OneBook />
          <DeleteBook />
          {/* <EditBook /> */}
          {/* <Reviews /> */}
          <ReviewForm />
          <DeleteReview />
        </Route>
        {/* <Route path='/reviews/add' exact={true}>
          <ReviewForm />
        </Route> */}
        {/* <Route path='/books/edit/:bookId' >
          <EditBook />
        </Route> */}
        {/* <Route path='/books/add' exact={true}>
          <FEBookForm />
        </Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
