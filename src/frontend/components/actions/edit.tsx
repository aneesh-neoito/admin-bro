import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Box } from '@admin-bro/design-system'

import PropertyType from '../property-type'
import { ActionProps } from './action.props'
import ActionHeader from '../app/action-header/action-header'
import useRecord from '../../hooks/use-record/use-record'
import { RecordJSON } from '../../interfaces'
import { appendForceRefresh } from './utils/append-force-refresh'
import LayoutElementRenderer from './utils/layout-element-renderer'
import { submitForm } from './utils/get-submit-form';

const Edit: FC<ActionProps> = (props) => {
  const { record: initialRecord, resource, action } = props

  const useRecordHook = useRecord(initialRecord, resource.id)
  const {
    record,
    handleChange,
    submit: handleSubmit,
    loading,
    setRecord,
  } = useRecordHook;

  const history = useHistory()

  useEffect(() => {
    if (initialRecord) {
      setRecord(initialRecord)
    }
  }, [initialRecord])

  const submit = (event: React.FormEvent<HTMLFormElement>): boolean => {
    event.preventDefault()
    handleSubmit().then((response) => {
      if (response.data.redirectUrl) {
        history.push(appendForceRefresh(response.data.redirectUrl))
      }
    })
    return false
  }

  return (
    <Box
      as="form"
      onSubmit={submit}
      flex
      flexGrow={1}
      flexDirection="column"
    >
      <Box>
        {action?.showInDrawer ? <ActionHeader {...props} /> : null}
        {action.layout ? action.layout.map((layoutElement, i) => (
          <LayoutElementRenderer
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            layoutElement={layoutElement}
            {...props}
            where="edit"
            onChange={handleChange}
            record={record as RecordJSON}
            useRecordHook={useRecordHook}
          />
        )) : resource.editProperties.map(property => (
          <PropertyType
            key={property.propertyPath}
            where="edit"
            onChange={handleChange}
            property={property}
            resource={resource}
            record={record as RecordJSON}
            useRecordHook={useRecordHook}
          />
        ))}
      </Box>
      {submitForm({ props, loading })}
    </Box>
  )
}

export {
  Edit as default,
  Edit,
}
