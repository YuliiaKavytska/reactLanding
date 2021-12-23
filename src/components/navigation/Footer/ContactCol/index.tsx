import React, { FC } from 'react'

import { ColName, Link, NavCol, NavItem, NavList } from './styled'

interface IContactCol {
  item: {
    title: string
    list: Array<string>
  }
}

const ContactCol: FC<IContactCol> = ({ item }) => {
  return (
    <NavCol>
      <ColName>{item.title}</ColName>
      <NavList>
        {item.list.map((link, i) => (
          <NavItem key={i}>
            <Link href="#">{link}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavCol>
  )
}

export default ContactCol
