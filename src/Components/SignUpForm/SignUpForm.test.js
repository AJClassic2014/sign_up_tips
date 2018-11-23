import React from 'react';
import { mount } from 'enzyme';
import SignUpForm from './SignUpForm';
import signUp from '../../apis/signUp';

jest.mock('../../apis/signUp', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('SignUpForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SignUpForm />);
  });

  it('should input email and set state', () => {
    wrapper.find('input.email').simulate('change', { target: { value: 'email' } });
    expect(wrapper.state('email')).toBe('email');
  });

  it('should input password and set state', () => {
    wrapper.find('input.password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.state('password')).toBe('password');
  });

  it('should input confirmPassword and set state', () => {
    wrapper.find('input.confirmPassword').simulate('change', { target: { value: 'confirmPassword' } });
    expect(wrapper.state('confirmPassword')).toBe('confirmPassword');
  });

  it('should not show error when user first see sign up form', () => {
    const error = wrapper.find('.error');
    expect(error.exists()).toBeFalsy();
  });

  describe('Email input - User input a blank email and submit', () => {
    beforeEach(() => {
      wrapper.find('input.email').simulate('change', { target: { value: '' } });
      wrapper.find('form.signUpForm').simulate('submit');
    })

    it('should show "Please input your email"', () => {
      const emailError = wrapper.find('.error .email');
      expect(emailError.exists()).toBeTruthy();
      expect(emailError.text()).toBe('Please input your email');
    });

    it('should hide "Please input your email" after user input email', () =>{
      wrapper.find('input.email').simulate('change', { target: { value: 'email' } });
      wrapper.find('form.signUpForm').simulate('submit');
      const emailError = wrapper.find('.error .email');
      expect(emailError.exists()).toBeFalsy();
    });
  });

  describe('Password input - User input a blank password and submit', () => {
    beforeEach(() => {
      wrapper.find('input.password').simulate('change', { target: { value: '' } });
      wrapper.find('form.signUpForm').simulate('submit');
    })

    it('should show "Please input your password"', () => {
      const passwordError = wrapper.find('.error .password');
      expect(passwordError.exists()).toBeTruthy();
      expect(passwordError.text()).toBe('Please input your password');
    });

    it('should hide "Please input your password" after user input password', () =>{
      wrapper.find('input.password').simulate('change', { target: { value: 'password' } });
      wrapper.find('form.signUpForm').simulate('submit');
      const passwordError = wrapper.find('.error .password');
      expect(passwordError.exists()).toBeFalsy();
    });
  });

  describe('Confirm password input - User input a blank confirm password and submit', () => {
    beforeEach(() => {
      wrapper.find('input.confirmPassword').simulate('change', { target: { value: '' } });
      wrapper.find('form.signUpForm').simulate('submit');
    })

    it('should show "Please input your confirmPassword"', () => {
      const confirmPasswordError = wrapper.find('.error .confirmPassword');
      expect(confirmPasswordError.exists()).toBeTruthy();
      expect(confirmPasswordError.text()).toBe('Please input your confirm password');
    });

    it('should hide "Please input your confirmPassword" after user input confirmPassword', () =>{
      wrapper.find('input.confirmPassword').simulate('change', { target: { value: 'confirmPassword' } });
      wrapper.find('form.signUpForm').simulate('submit');
      const confirmPasswordError = wrapper.find('.error .confirmPassword');
      expect(confirmPasswordError.exists()).toBeFalsy();
    });
  });

  describe('Password equals to Confirm password', () => {
    beforeEach(() => {
      wrapper.find('input.confirmPassword').simulate('change', { target: { value: 'password' } });
      wrapper.find('input.password').simulate('change', { target: { value: 'confirmPassword' } });
      wrapper.find('form.signUpForm').simulate('submit');
    });

    it('should show "Please input the same password" after user input confirm password', () => {
      const differentPasswordError = wrapper.find('.error .differentPasswordError');
      expect(differentPasswordError.exists()).toBeTruthy();
    });

    it('should not show "Please input the same password" after user input confirm password', () => {
      wrapper.find('input.confirmPassword').simulate('change', { target: { value: 'password' } });
      wrapper.find('input.password').simulate('change', { target: { value: 'password' } });
      wrapper.find('form.signUpForm').simulate('submit');
      const differentPasswordError = wrapper.find('.error .differentPasswordError');
      expect(differentPasswordError.exists()).toBeFalsy();
    });
  });

  describe('Submit', () => {
    it('should call submit', () => {
      wrapper.find('input.email').simulate('change', { target: { value: 'email' } });
      wrapper.find('input.confirmPassword').simulate('change', { target: { value: 'password' } });
      wrapper.find('input.password').simulate('change', { target: { value: 'password' } });
      wrapper.find('form.signUpForm').simulate('submit');
      expect(signUp).toBeCalled();
    });
  });
})