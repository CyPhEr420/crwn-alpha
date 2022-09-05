import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';


import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React, { useEffect } from 'react'
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

function App(props) {

  const { setCurrentUser, currentUser } = props;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth)
      }
    });
    return () => {
      unsubscribe();
    }
  }, [setCurrentUser]);


  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/signin' element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
  }
)
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
