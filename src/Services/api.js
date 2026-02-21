import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;




// return (
//     <div className="min-h-screen bg-slate-900 p-6 md:p-8 text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
//           <div>
//             <h1 className="text-3xl font-bold">Lead Dashboard</h1>
//             <p className="text-slate-400 mt-1">
//               Track and manage your sales leads
//             </p>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <StatCard title="Total Leads" value={total} />
//           <StatCard title="New" value={countByStage("New")} color="text-blue-400" />
//           <StatCard
//             title="Qualified"
//             value={countByStage("Qualified")}
//             color="text-emerald-400"
//           />
//           <StatCard
//             title="Closed"
//             value={countByStage("Closed")}
//             color="text-purple-400"
//           />
//         </div>

//         {/* Table */}
//         <div className="rounded-xl overflow-hidden bg-slate-800">
//           <table className="w-full">
//             <thead className="bg-slate-700 text-slate-300 text-sm">
//               <tr>
//                 {["Name","Company","Email","Value", "Created By", "Stage", "Actions"].map(
//                   (h) => (
//                     <th key={h} className="px-6 py-4 text-left font-semibold">
//                       {h}
//                     </th>
//                   )
//                 )}
//               </tr>
//             </thead>

//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="5" className="py-12 text-center text-slate-400">
//                     Loading leads...
//                   </td>
//                 </tr>
//               ) : leads.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="py-12 text-center text-slate-400">
//                     No leads found
//                   </td>
//                 </tr>
//               ) : (
//                 leads.map((lead) => (
//                   <tr
//                     key={lead._id}
//                     className="border-t border-slate-700 hover:bg-slate-700/40"
//                   >
//                     {/* Name */}
//                   <td className="px-6 py-4">{lead.fullName}</td>
          
//                   {/* Company */}
//                   <td className="px-6 py-4">{lead.companyName}</td>
          
//                   {/* Email */}
//                   <td className="px-6 py-4">{lead.email}</td>
          
//                   {/* Value */}
//                   <td className="px-6 py-4">₹{lead.dealValue}</td>
          
//                   {/* Created By */}
//                   <td className="px-6 py-4 ">
//                     {lead.createdBy?.firstName}
//                   </td>
          
//                   {/* Stage */}
//                   <td className="px-6 py-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${stageStyles[lead.stage]}`}
//                       >
//                         {lead.stage}
//                       </span>
//                     </td>

//                   {/* Actions */}
//                   <td className="px-6 py-4">
//                     <button className="text-indigo-400 hover:text-indigo-300 text-sm">
//                       View
//                     </button>
//                   </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };