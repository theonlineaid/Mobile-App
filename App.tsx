import React from 'react'
import Products from './src/components/Products';
import CustomHeader from './src/components/CustomHeader'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <CustomHeader title="LOGO" />
      <Products />
    </>
  )
}

export default App