import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { cssClass, Box, Icon, themeGet } from '@admin-bro/design-system'

import LoggedIn from './logged-in'
import Version from './version'

import { ReduxState } from '../../store/store'
import allowOverride from '../../hoc/allow-override'


const NavBar = styled(Box)`
  height: ${({ theme }): string => theme.sizes.navbarHeight};
  border-bottom: ${themeGet('borders', 'default')};
  background: ${({ theme }): string => theme.colors.white};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
`

NavBar.defaultProps = {
  className: cssClass('NavBar'),
}

type Props = {
  toggleSidebar: (any) => void;
}

export const TopBarOriginal: React.FC<Props> = (props) => {
  const { toggleSidebar } = props
  const [session, paths, versions] = useSelector(
    (state: ReduxState) => [state.session, state.paths, state.versions],
  )
  return (
    <NavBar>
      <Box
        py="lg"
        px={['default', 'lg']}
        onClick={toggleSidebar}
        display={['block', 'block', 'block', 'block', 'none']}
        style={{ cursor: 'pointer' }}
      >
        <Icon icon="Menu" size={32} color="grey100" />
      </Box>
      <Version versions={versions} />
      {session && session.email ? <LoggedIn session={session} paths={paths} /> : ''}
    </NavBar>
  )
}

const Topbar = allowOverride(TopBarOriginal, 'Topbar')

export { Topbar }
export default Topbar
