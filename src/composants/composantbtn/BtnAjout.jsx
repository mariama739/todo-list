// import React from 'react'

// export default function BtnAjout() {
//   return (
//     <div>
//       <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
//         Ajouter
//       </button>
//     </div>
//   );
// }

import React from "react";

export default function BtnAjout({ onClick }) {
  return (
    <div>
      <button
        className="py-2 px-5 bg-violet-500 text-white font-semibold rounded hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        onClick={onClick}
      >
        Ajouter
      </button>
    </div>
  );
}
