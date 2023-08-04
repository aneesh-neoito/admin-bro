import React from 'react'
import { Box, Icon } from '@admin-bro/design-system'

import { ActionProps } from '../action.props'
import { Button } from '../../libs/design-system-wrapper'
import { useTranslation } from '../../../hooks/use-translation'

declare const AdminBro: {
  UserComponents: Array<string>
}

type SubmitFormProps = {
  props: ActionProps
  loading: boolean
}

export const submitForm = ({ props, loading }: SubmitFormProps) => {
  const { resource, action } = props
  const { translateButton } = useTranslation()

  const { submitForm } = action?.custom ?? {}
  if (submitForm === false) {
    return ''
  }

  const CustomSubmitForm: any = AdminBro.UserComponents[submitForm]

  if (CustomSubmitForm) {
    return <CustomSubmitForm {...props} loading={loading} />
  }

  return (
    <Box>
      <Button variant="primary" size="lg" type="submit" data-testid="button-save">
        {loading ? (<Icon icon="Fade" spin />) : null}
        {translateButton('save', resource.id)}
      </Button>
    </Box>
  )
}
