import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Box } from '@admin-bro/design-system'

import PropertyType from '../property-type'

import { ActionProps } from './action.props'
import ActionHeader from '../app/action-header/action-header'
import { RecordJSON } from '../../interfaces'
import useRecord from '../../hooks/use-record/use-record'
import { appendForceRefresh } from './utils/append-force-refresh'
import LayoutElementRenderer from './utils/layout-element-renderer'
import { submitForm } from './utils/get-submit-form';

const New: FC<ActionProps> = (props) => {
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
      // if record has id === has been created
      if (response.data.record.id) {
        handleChange({ params: {}, populated: {}, errors: {} } as RecordJSON)
      }
    })
    return false
  }

  const content = (
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
  )

  return (
    <Box
      as="form"
      onSubmit={submit}
      flex
      flexGrow={1}
      flexDirection="column"
    >
      {content} 
      {submitForm({ props, loading })}
    </Box>
  )
}

export {
  New as default,
  New,
}
