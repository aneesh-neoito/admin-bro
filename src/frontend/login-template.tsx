/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineStyles } from '@admin-bro/design-system'
import { initializeStore } from './store'
import AdminBro from '../admin-bro'
import { getFaviconFromBranding } from '../backend/utils/options-parser/options-parser'
import ViewHelpers from '../backend/utils/view-helpers/view-helpers'

type LoginTemplateAttributes = {
  /**
   * action which should be called when user clicks submit button
   */
  action: string;
  /**
   * Error message to present in the form
   */
  errorMessage?: string;
}

const html = async (
  admin: AdminBro,
  props: LoginTemplateAttributes,
): Promise<string> => {
  const h = new ViewHelpers({ options: admin.options })

  const store = await initializeStore(admin)
  const reduxState = store.getState()

  const { branding, assets } = reduxState

  const scripts = ((assets && assets.scripts) || [])
    .map(s => `<script src="${s}"></script>`)
  const styles = ((assets && assets.styles) || [])
    .map(l => `<link rel="stylesheet" type="text/css" href="${l}">`)
  const theme = combineStyles((branding && branding.theme) || {})
  const faviconTag = getFaviconFromBranding(branding)

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
  `
}

export default html
