import React, { ReactNode } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { RouteComponentProps } from 'react-router'
import { Icon, cssClass } from '@admin-bro/design-system'

import { BasePropertyJSON } from '../../interfaces'
import allowOverride from '../../hoc/allow-override'


export type SortLinkProps = {
  property: BasePropertyJSON;
  direction?: 'asc' | 'desc';
  sortBy?: string;
}

class SortLinkOriginal extends React.PureComponent<SortLinkProps & RouteComponentProps> {
  constructor(props) {
    super(props)
    this.isActive = this.isActive.bind(this)
  }

  isActive(): boolean {
    const { sortBy, property } = this.props
    return sortBy === property.propertyPath
  }

  render(): ReactNode {
    const { property, location, direction } = this.props
    const query = new URLSearchParams(location.search)
    const oppositeDirection = (this.isActive() && direction === 'asc') ? 'desc' : 'asc'
    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`

    query.set('direction', oppositeDirection)
    query.set('sortBy', property.propertyPath)

    return (
      <NavLink to={{ search: query.toString() }} className={cssClass('SortLink')}>
        {property.label}
        {this.isActive() ? (<Icon icon={sortedByIcon} color="primary100" ml="default" />) : ''}
      </NavLink>
    )
  }
}

const SortLink = allowOverride( withRouter(SortLinkOriginal), 'SortLink');

export { SortLink };
export default SortLink;
