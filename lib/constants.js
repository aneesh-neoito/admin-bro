"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADMIN_BRO_TMP_DIR = exports.DEFAULT_PATHS = exports.DOCS = void 0;
const DOCS = 'https://adminbro.com';
exports.DOCS = DOCS;
const DEFAULT_PATHS = {
  rootPath: '/admin',
  logoutPath: '/admin/logout',
  impersonatePath: '/admin/impersonate',
  impersonateLogoutPath: '/admin/impersonate/logout',
  loginPath: '/admin/login',
  signupPath: '/admin/signup',
  forgotPasswordPath: '/admin/forgot-password',
  changePasswordPath: '/admin/change-password'
};
/* cspell: disable-next-line */

exports.DEFAULT_PATHS = DEFAULT_PATHS;
const ADMIN_BRO_TMP_DIR = '.adminbro';
exports.ADMIN_BRO_TMP_DIR = ADMIN_BRO_TMP_DIR;