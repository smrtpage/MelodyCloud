import { createAction } from '@reduxjs/toolkit';

export const loginAction = createAction('auth/login');
export const logoutAction = createAction('auth/logout');
