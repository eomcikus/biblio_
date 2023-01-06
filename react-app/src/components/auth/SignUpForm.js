import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submit, setSubmit] = useState(false)
  const [validationErrors, setValidationErrors] = useState([])

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    let errors = []
    if (!username) errors.push('Must have a username for signup')
    if (username.length < 4 || username.length > 30) errors.push('Username must be longer than 3 characters, and less than 30 characters.')
    if (!email) errors.push('Signup Form must contain an email')
    if (!email.includes('@')) errors.push('Email must be a valid email containing an @ sign')
    if (!email.endsWith('.com') && !email.endsWith('.io')) errors.push('Email must be a valid email ending with ".com" or ".io"')
    if (password !== repeatPassword) errors.push('Passwords must match')
    setValidationErrors(errors)
  }, [username, email, password, repeatPassword])

  const onSignUp = async (e) => {

    e.preventDefault();
    setSubmit(true)
    if (validationErrors.length) {
      return
    }
    const data = await dispatch(signUp(username, email, password));
    return
    // history.push('/books')
    // if (password === repeatPassword) {
    //   const data = await dispatch(signUp(username, email, password));


  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      {submit && !!validationErrors.length && (
        <ul className='signup-errors'>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>))}

        </ul>
      )}
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
