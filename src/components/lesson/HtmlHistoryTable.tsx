import React from 'react';
import { History, Calendar } from 'lucide-react';

const HISTORY_DATA = [
  { year: '1989', version: 'Tim Berners-Lee invented www' },
  { year: '1991', version: 'Tim Berners-Lee invented HTML' },
  { year: '1993', version: 'Dave Raggett drafted HTML+' },
  { year: '1995', version: 'HTML Working Group defined HTML 2.0' },
  { year: '1997', version: 'W3C Recommendation: HTML 3.2' },
  { year: '1999', version: 'W3C Recommendation: HTML 4.01' },
  { year: '2000', version: 'W3C Recommendation: XHTML 1.0' },
  { year: '2008', version: 'WHATWG HTML5 First Public Draft' },
  { year: '2012', version: 'WHATWG HTML5 Living Standard' },
  { year: '2014', version: 'W3C Recommendation: HTML5' },
  { year: '2016', version: 'W3C Candidate Recommendation: HTML 5.1' },
  { year: '2017', version: 'W3C Recommendation: HTML5.1 2nd Edition' },
  { year: '2017', version: 'W3C Recommendation: HTML5.2' }
];

export const HtmlHistoryTable: React.FC = () => {
  return (
    <div className="my-8 rounded-2xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 shadow-xl transition-all space-y-4">
      <div className="space-y-1 pb-3 border-b border-gray-200 dark:border-[#1e293b]">
        <h3 className="text-xl sm:text-2xl font-black text-[#282A35] dark:text-white flex items-center space-x-2">
          <History className="w-5 h-5 text-[#04AA6D]" />
          <span>HTML History</span>
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Since the early days of the World Wide Web, there have been many versions of HTML:
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
        <table className="w-full text-left text-sm text-gray-800 dark:text-gray-200">
          <thead className="bg-[#f1f5f9] dark:bg-[#111827] text-gray-900 dark:text-white uppercase font-black text-xs border-b border-gray-300 dark:border-gray-700">
            <tr>
              <th className="py-3 px-4 w-28 sm:w-36 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#04AA6D]" />
                <span>Year</span>
              </th>
              <th className="py-3 px-4">Version</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800 font-sans">
            {HISTORY_DATA.map((item, idx) => (
              <tr
                key={idx}
                className={
                  idx % 2 === 0
                    ? 'bg-white dark:bg-[#0c121e] hover:bg-gray-50 dark:hover:bg-[#141d2e] transition-colors'
                    : 'bg-[#f8fafc] dark:bg-[#080d14] hover:bg-gray-50 dark:hover:bg-[#141d2e] transition-colors'
                }
              >
                <td className="py-3 px-4 font-mono font-bold text-gray-900 dark:text-gray-100">
                  {item.year}
                </td>
                <td className="py-3 px-4 font-medium text-gray-800 dark:text-gray-200">
                  {item.version}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
