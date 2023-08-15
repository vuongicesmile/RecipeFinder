import React, { useState } from 'react'
import Search from '../components/search'
import ReceiptList from '../components/receiptList'

const Receipe = () => {
  const [ searchQuery, setSearchQuery] = useState('pizza');

  const getSearchResult = () => {
    getReceipes(searchQuery);
  }

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <ReceiptList />
    </div>
  )
}

export default Receipe