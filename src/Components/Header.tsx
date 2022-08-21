import React from 'react'

interface HeaderProps{
    label?:string;
    children?:JSX.Element | JSX.Element[];
}

const Header = ({label="Default label",children}: HeaderProps) => {
  return (
    <div>
      <h2>{label}</h2>
      {children}
    </div>
  )
}

export default Header