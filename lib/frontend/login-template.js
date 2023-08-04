"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _designSystem = require("@admin-bro/design-system");

var _store = require("./store");

var _optionsParser = require("../backend/utils/options-parser/options-parser");

var _viewHelpers = _interopRequireDefault(require("../backend/utils/view-helpers/view-helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const html = async (admin, props) => {
  const h = new _viewHelpers.default({
    options: admin.options
  });
  const store = await (0, _store.initializeStore)(admin);
  const reduxState = store.getState();
  const {
    branding,
    assets
  } = reduxState;
  const scripts = (assets && assets.scripts || []).map(s => `<script src="${s}"></script>`);
  const styles = (assets && assets.styles || []).map(l => `<link rel="stylesheet" type="text/css" href="${l}">`);
  const theme = (0, _designSystem.combineStyles)(branding && branding.theme || {});
  const faviconTag = (0, _optionsParser.getFaviconFromBranding)(branding);
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <script>
        window.REDUX_STATE = ${JSON.stringify(reduxState)};
        window.THEME = ${JSON.stringify(theme)};
        window.LOGIN = ${JSON.stringify(props)}
        window.AdminBro = { Components: {} };
      </script>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${branding.companyName} | Login</title>
      ${faviconTag}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" type="text/css">
      ${styles.join('\n')}

      <script src="${h.assetPath('global.bundle.js')}"></script>
      <script src="${h.assetPath('design-system.bundle.js')}"></script>
      <script src="${h.assetPath('login.bundle.js')}"></script>
      <script src="${h.assetPath('components.bundle.js')}"></script>
    </head>
    <body>
      <div id="app"></div>
      <script>
        var app = document.getElementById( 'app' );
        ReactDOM.render( AdminBro.Application, app );
      </script>
      ${scripts.join('\n')}
    </body>
    </html>
  `;
};

var _default = html;
exports.default = _default;