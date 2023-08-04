import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import {
  Box,
  H5,
  H2,
  Illustration,
  Text,
  SoftwareBrothers,
  themeGet,
} from '@admin-bro/design-system'
import { useTranslation } from '../../hooks'
import { ReduxState } from '../../store/store'
import allowOverride from '../../hoc/allow-override'

const Wrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const StyledLogo = styled.img`
  max-width: 200px;
  margin: ${themeGet('space', 'md')} 0;
`

export type ChangePasswordProps = {
  message?: string;
  action: string;
}

const ChangePasswordOriginal: React.FC<ChangePasswordProps> = (props) => {
  const { action } = props
  const { translateLabel, translateMessage } = useTranslation()
  const branding = useSelector((state: ReduxState) => state.branding)

  return (
    <Wrapper flex variant="grey">
      <Box bg="white" height="440px" flex boxShadow="login" width={[1, 2 / 3, 'auto']}>
        <Box
          bg="primary100"
          color="white"
          p="x3"
          width="380px"
          flexGrow={0}
          display={['none', 'none', 'block']}
          position="relative"
        >
          <H2 fontWeight="lighter">{translateLabel('loginWelcome')}</H2>
          <Text fontWeight="lighter" mt="default">
            {translateMessage('loginWelcome')}
          </Text>
          <Text textAlign="center" p="xxl">
            <Box display="inline" mr="default">
              <Illustration variant="Planet" width={82} height={91} />
            </Box>
            <Box display="inline">
              <Illustration variant="Astronaut" width={82} height={91} />
            </Box>
            <Box display="inline" position="relative" top="-20px">
              <Illustration variant="FlagInCog" width={82} height={91} />
            </Box>
          </Text>
        </Box>
        <Box
          as="form"
          action={action}
          method="POST"
          p="x3"
          flexGrow={1}
          width={['100%', '100%', '480px']}
        >
          <H5 marginBottom="xxl">
            {branding.logo ? (
              <StyledLogo
                src={branding.logo}
                alt={branding.companyName}
              />
            ) : branding.companyName}
          </H5>
          <Text mt="xl" textAlign="center">Change password not implemented yet.</Text>
        </Box>
      </Box>
      {branding.softwareBrothers ? (<Box mt="xxl"><SoftwareBrothers /></Box>) : null}
    </Wrapper>
  );
}

const ChangePassword = allowOverride(ChangePasswordOriginal, 'ChangePassword')

export { ChangePassword }
export default ChangePassword