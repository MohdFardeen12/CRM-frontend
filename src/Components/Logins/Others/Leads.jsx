import { useEffect, useState } from "react";
import API from "../../../Services/api";
import React from "react";

//for searchbar icon user in header of leads table
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const stageStyles = {
  New: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Contacted: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Qualified: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Proposal: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  Closed: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
};

const Leads = () => {
  const [leads, setLeads] = useState([]);

  //for leads clickable feature
  const [selectedLead, setSelectedLead] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  //leads search feature
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  //changed fetchleads for search feature
  const fetchLeads = async (keyword = "") => {
    try {
      const res = await API.get(`/opportunity/list?keyword=${keyword}`);
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead?")) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/opportunity/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch (e) {
      alert("Delete failed");
    }
  };

  const total = leads.length;
  const newCount = leads.filter(l => l.stage === "New").length;
  const qualified = leads.filter(l => l.stage === "Qualified").length;
  const closed = leads.filter(l => l.stage === "Closed").length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        {/* changed after adding search bar */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Leads Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track and manage your sales leads
            </p>
          </div>
        

          <div className="relative">
            <MagnifyingGlassIcon
              className="w-5 h-5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                fetchLeads(value);
              }}
              className="w-full pl-11 pr-4 py-2 rounded-lg border
                border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800
                text-gray-800 dark:text-gray-100
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
          </div> 
        </div>

        {/* Stats — LEFT ALIGNED */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Leads" value={total} />
          <StatCard title="New" value={newCount} />
          <StatCard title="Qualified" value={qualified} />
          <StatCard title="Closed" value={closed} />
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr className="text-left text-gray-700 dark:text-gray-200">
                {["Name","Company","Email","Value","Stage","Created By","Actions"]
                  .map(h => (
                    <th key={h} className="px-6 py-4 font-semibold">{h}</th>
                  ))}
              </tr>
            </thead>

            <tbody>

              {leads.length === 0 && (
                <tr>
                  <td colSpan="7"
                    className="py-10 text-center text-gray-500 dark:text-gray-400">
                    No leads found
                  </td>
                </tr>
              )}

              {leads.map((lead, i) => (
                <tr
                  key={lead._id}
                  onClick={() => {
                    setSelectedLead(lead);
                    setShowPanel(true);
                  }}
                  className={`
                    cursor-pointer
                    border-t border-gray-200 dark:border-gray-700
                    ${i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"}
                  `}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    {lead.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {lead.companyName}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {lead.email}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-200">
                    ₹{lead.dealValue}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${stageStyles[lead.stage]}`}>
                      {lead.stage}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {lead.createdBy?.firstName} {lead.createdBy?.lastName}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(lead._id);
                      }}
                      className="px-3 py-1 rounded-md border
                        border-gray-300 dark:border-gray-600
                        text-gray-700 dark:text-gray-200
                        hover:bg-red-500 hover:text-white transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>


      {/* ---------- Lead Detail Side Panel ---------- */}
      {showPanel && selectedLead && (
        <div className="fixed inset-0 z-50 flex">
          
          <div
            className="flex-1 bg-black/40"
            onClick={() => setShowPanel(false)}
          />
      
          <div className="w-96 h-full bg-white dark:bg-gray-900
              border-l border-gray-200 dark:border-gray-700
              p-6 overflow-y-auto">
      
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Lead Details
              </h2>
      
              <button
                onClick={() => setShowPanel(false)}
                className="text-red-500 font-semibold"
              >
                Close
              </button>
            </div>
      
            {Object.entries(selectedLead).map(([key, value]) => (
              <div key={key} className="mb-3">
                <p className="text-xs text-gray-500 dark:text-gray-400">{key}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {typeof value === "object"
                    ? JSON.stringify(value)
                    : String(value)}
                </p>
              </div>
            ))}
      
          </div>
        </div>
      )}



    </div>
  );
};

export default Leads;


/* ---------- Stat Card ---------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl p-4 shadow-sm">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">
        {value}
      </p>
    </div>
  );
}
