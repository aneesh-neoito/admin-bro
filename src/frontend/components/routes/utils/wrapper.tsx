import React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, DrawerContent, DrawerFooter } from '@admin-bro/design-system'

const StyledWrapper = styled(Box)`
  & ${DrawerContent} {
    background: ${({ theme }): string => theme.colors.white};
    padding: ${({ theme }): string => theme.space.xxl};
    overflow: visible;
  }
  
  & ${DrawerFooter} {
    background: ${({ theme }): string => theme.colors.white};
    padding: 0 ${({ theme }): string => theme.space.xxl} ${({ theme }): string => theme.space.xxl};
  }
`

const Wrapper: React.FC<BoxProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, variant, color, ...rest } = props
  return (
    <StyledWrapper {...rest} px="80px" mx="auto">
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
