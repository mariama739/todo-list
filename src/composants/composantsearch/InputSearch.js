// import React from 'react'

// export default function InputSearch() {
//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         id="text"
//         className="w-[250px] rounded-md border-0 py-2.5 pl-3 ml-20 text-gray-900 ring-2 ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
//         placeholder="Rechercher"
//       />
//     </div>
//   );
// }

import React from "react";

export default function InputSearch({ setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        className="w-64 rounded-md border py-2.5 pl-3 text-gray-900 ring-2 ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset"
        placeholder="Rechercher"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
