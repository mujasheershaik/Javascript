import React, { useState } from "react";

function Searchbox2() {
  let [search, setsearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <h3>You searched: {search}</h3>
    </div>
  );
}

export default Searchbox2