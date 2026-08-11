import React, { useRef } from "react"

function Search() {
  let searchRef = useRef()

  function focusSearch() {
    searchRef.current.focus()
  }

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search products"/>

      <button onClick={focusSearch}>
        Search
      </button>
    </div>
  )
}

export default Search