import React from 'react';

const leads = [
  {
    name: 'Amit Sharma',
    email: 'amit@example.com',
    phone: '+91 9876543210',
    source: 'Website',
    status: 'New',
    created: '2025-07-01',
  },
  {
    name: 'Reena Das',
    email: 'reena@example.com',
    phone: '+91 9123456789',
    source: 'Referral',
    status: 'Contacted',
    created: '2025-07-02',
  },
  {
    name: 'Mahesh Verma',
    email: 'mahesh@bizmail.com',
    phone: '+91 9988776655',
    source: 'Email Campaign',
    status: 'Qualified',
    created: '2025-07-03',
  },
  {
    name: 'Sunita Singh',
    email: 'sunita@example.com',
    phone: '+91 9876543211',
    source: 'Cold Call',
    status: 'Failed',
    created: '2025-07-04',
  },
];

const statusColors = {
  New: 'bg-orange-100 text-orange-800',
  Contacted: 'bg-blue-100 text-blue-800',
  Qualified: 'bg-green-100 text-green-800',
  Failed: 'bg-red-100 text-red-800',
};

const Leads = () => {
  return (
    <main className="flex-1 p-6 sm:p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Leads</h1>
        <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-medium shadow-sm hover:shadow-md">
          + Add Lead
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Email</th>
              <th className="px-6 py-3 font-semibold">Phone</th>
              <th className="px-6 py-3 font-semibold">Source</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.source}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColors[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{lead.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Leads;