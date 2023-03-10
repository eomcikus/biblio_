import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllBooks from './components/Books/AllBooks/allbooks'
import OneBook from './components/Books/CurrentBook/currentbook';
import { FEBookForm } from './components/Books/BookForm/bookform';
import DeleteBook from './components/Books/DeleteBook/deletebook';
import EditBook from './components/Books/UpdateBook/EditBook';
import { Reviews } from './components/Reviews/Reviews';
import ReviewForm from './components/Reviews/AddReview/ReviewForm'
import DeleteReview from './components/Reviews/DeleteReview';
import EditReview from './components/Reviews/EditReview/EditReview';
import { AllShelves } from './components/shelves/AllShelves';
import { UserShelf } from './components/shelves/UserShelf';
import { AddBook2Shelf } from './components/shelves/AddABookToShelf';
import AllTags from './components/Tags/AllTags';
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
          {/* <h1>KidLit</h1> */}
          <AllBooks />
        </Route>
        <Route path='/books' exact={true}>
          <AllBooks />
          {/* <FEBookForm /> */}
        </Route>
        <Route path='/books/add' exact={true}>
          <FEBookForm />
        </Route>
        <Route path='/books/:bookId' exact={true}>
          <OneBook />
          {/* <DeleteBook /> */}
          {/* <EditBook /> */}
          {/* <Reviews /> */}
          {/* <ReviewForm /> */}
          {/* <EditReview /> */}
          {/* <DeleteReview /> */}

        </Route>
        <Route path='/shelves/' exact={true}>
          <AllShelves />
        </Route>
        <Route path='/shelves/user' exact={true}>
          <UserShelf />
        </Route>
        <Route path='/shelves/add' exact={true}>
          <AddBook2Shelf />
        </Route>
        {/* <Route path='/reviews/add' exact={true}>
          <ReviewForm />
        </Route> */}
        <Route path='/books/edit/:bookId' exact={true}>
          <EditBook />
        </Route>
        <Route path='/books/reviews/:reviewId/delete' exact={true}>
          <DeleteReview />
        </Route>
        <Route path='/books/reviews/edit/:reviewId' exact={true}>
          <EditReview />
        </Route>
        <Route path='/books/reviews' exact={true}>
          <Reviews />
        </Route>
        <Route path='/books/:bookId/reviews/add' exact={true}>
          <ReviewForm />
        </Route>
        {/* <Route path='/tags/:bookId' exact={true}>
          <AllTags />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
