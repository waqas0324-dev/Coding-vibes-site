import React from 'react';
import { ComparisonTable as ComparisonTableType } from '../../types';
import { FormattedText } from './FormattedText';
import { Table } from 'lucide-react';

interface ComparisonTableProps {
  table: ComparisonTableType;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ table }) => {
  const { title, headers, rows } = table;

  return (
    <div className="my-6 rounded-2xl bg-[#090e17] border border-[#1e293b] overflow-hidden shadow-xl">
      {title && (
        <div className="px-5 py-3.5 bg-[#0d131f] border-b border-[#1e293b] flex items-center space-x-2">
          <Table className="w-4 h-4 text-[#22c55e]" />
          <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {title}
          </h4>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#0f172a] border-b border-[#1e293b] text-gray-300 font-mono text-[11px] uppercase tracking-wider">
              {headers.map((h, idx) => (
                <th key={idx} className="px-5 py-3 font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-[#141d2e]/50 transition duration-150 text-gray-300"
              >
                {row.values.map((val, cIdx) => {
                  const isCode = row.isCode ? row.isCode[cIdx] : false;
                  return (
                    <td key={cIdx} className="px-5 py-3.5 align-top">
                      {isCode ? (
                        <code className="px-2 py-1 rounded bg-[#1e293b] text-[#38bdf8] font-mono text-xs font-semibold border border-[#334155]/60">
                          {val}
                        </code>
                      ) : (
                        <FormattedText text={val} />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
