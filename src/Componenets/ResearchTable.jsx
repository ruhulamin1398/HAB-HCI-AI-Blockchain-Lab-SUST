import React from 'react';

const ResearchTable = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-6">Research Papers</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Researchers
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of Publication
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Research Area Tags
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4  ">Blockchain, AI, and Data Protection in Healthcare</td>
                    <td className="px-6 py-4  ">Victoria Lemieux, Meng Kang, Deepansha Chhabra</td>
                    <td className="px-6 py-4  ">October 16, 2023</td>
                    <td className="px-6 py-4  ">-</td>
                    <td className="px-6 py-4  ">
                       
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  ">Fast-HotStuff: A Fast and Robust BFT Protocol for Blockchains</td>
                    <td className="px-6 py-4  ">Mohammad Jalalzai, Chen Feng, Jianyu Niu, Fangyu Gai</td>
                    <td className="px-6 py-4  ">August 15, 2023</td>
                    <td className="px-6 py-4  ">-</td>
                    <td className="px-6 py-4  ">
                      
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  ">Exploring Blockchain Technology for Chain of Custody Control in Physical Evidence: A Systematic Literature Review</td>
                    <td className="px-6 py-4  ">Co-authored by: Danielle Batista</td>
                    <td className="px-6 py-4  ">August 2, 2023</td>
                    <td className="px-6 py-4  ">-</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTable;
