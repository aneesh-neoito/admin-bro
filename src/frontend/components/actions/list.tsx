import React, { useEffect } from 'react'
import { Box, Pagination as PaginationOriginal, Text } from '@admin-bro/design-system'
import { useHistory, useLocation } from 'react-router'

import { withTheme, DefaultTheme } from 'styled-components'

import RecordsTable from '../app/records-table/records-table'
import { ActionProps } from './action.props'
import useRecords from '../../hooks/use-records/use-records'
import useSelectedRecords from '../../hooks/use-selected-records/use-selected-records'
import { REFRESH_KEY } from './utils/append-force-refresh'
import allowOverride from '../../hoc/allow-override'

type CombinedProps = ActionProps & {theme: DefaultTheme}

const Pagination = allowOverride(PaginationOriginal, 'Pagination', true);

const List: React.FC<CombinedProps> = ({ resource, setTag, theme }) => {
  const {
    records,
    loading,
    direction,
    sortBy,
    page,
    total,
    fetchData,
    perPage,
  } = useRecords(resource.id)
  const {
    selectedRecords,
    handleSelect,
    handleSelectAll,
    setSelectedRecords,
  } = useSelectedRecords(records)
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (setTag) {
      setTag(total.toString())
    }
  }, [total])

  useEffect(() => {
    setSelectedRecords([])
  }, [resource.id])

  useEffect(() => {
    const search = new URLSearchParams(location.search)
    if (search.get(REFRESH_KEY)) {
      setSelectedRecords([])
    }
  }, [location.search])

  const handleActionPerformed = (): any => fetchData()

  const handlePaginationChange = (pageNumber: number): void => {
    const search = new URLSearchParams(location.search)
    search.set('page', pageNumber.toString())
    history.push({ search: search.toString() })
  }

  return (
    <Box styles={{ background: theme.colors.bg }}>
      <RecordsTable
        resource={resource}
        records={records}
        actionPerformed={handleActionPerformed}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        selectedRecords={selectedRecords}
        direction={direction}
        sortBy={sortBy}
        isLoading={loading}
        total={total}
      />
      <Text mt="xl" textAlign="center">
        <Pagination
          page={page}
          perPage={perPage}
          total={total}
          onChange={handlePaginationChange}
        />
      </Text>
    </Box>
  )
}

const ListWithTheme = withTheme(List);

export {
  ListWithTheme as default,
  ListWithTheme as List,
}
