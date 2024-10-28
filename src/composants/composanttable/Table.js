// import React from 'react'
// import { IoEyeSharp } from "react-icons/io5";
// import { MdDelete } from "react-icons/md";


// export default function Table() {
//   return (
//     <div className="flex justify-center ">
//       <table class="border-collapse border border-slate-400 w-10/12 mt-14 ">
//         <thead>
//           <tr className="">
//             <th class="border border-slate-300 ...">Taches</th>
//             <th class="border border-slate-300 ...">Descriptions</th>
//             <th class="border border-slate-300 ...">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td class="border border-slate-300 font-bold">Coder</td>
//             <td class="border border-slate-300 ...">Utiliser une teckno</td>
//             <td class="border border-slate-300 ...">
//               <div className="flex gap-4">
//                 <IoEyeSharp />
//                 <MdDelete className="text-red-500" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="border border-slate-300 font-bold">Deployer</td>
//             <td class="border border-slate-300 ...">
//               Utiliser Github our le faire
//             </td>
//             <td class="border border-slate-300 ...">
//               <div className="flex gap-4">
//                 <IoEyeSharp />
//                 <MdDelete className="text-red-500" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td class="border border-slate-300 font-bold">Tester</td>
//             <td class="border border-slate-300 ...">
//               Utiliser les test unitaire
//             </td>
//             <td class="border border-slate-300 ...">
//               <div className="flex gap-4">
//                 <IoEyeSharp />
//                 <MdDelete className="text-red-500" />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";

export default function Table({ tasks, onEdit, onDelete }) {
  return (
    <div className="flex justify-center mt-6">
      <table className="border-collapse border border-slate-400 w-10/12">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Tâches</th>
            <th className="border border-slate-300 p-2">Descriptions</th>
            <th className="border border-slate-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-2 font-bold">
                {task.title}
              </td>
              <td className="border border-slate-300 p-2">
                {task.description}
              </td>
              <td className="border border-slate-300 p-2">
                <div className="flex gap-4">
                  <IoEyeSharp
                    className="text-blue-500 cursor-pointer"
                    onClick={() => alert(`${task.title}: ${task.description}`)}
                  />
                  <MdEdit
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => onEdit(index)}
                  />
                  <MdDelete
                    className="text-red-500 cursor-pointer"
                    onClick={() => onDelete(index)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
