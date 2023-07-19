"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Tfoot,
  TableCaption,
} from "@chakra-ui/react";
import { useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
  size?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  rows,
  caption,
  sorting,
  pagination,
  size,
}) => {
  const [sortColumn, setSortColumn] = useState<number>(-1);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // Number of rows to show per page

  // Sorting function
  const handleSort = (columnIndex: number) => {
    if (sorting) {
      if (sortColumn === columnIndex) {
        // Toggle the sorting order if the same column header is clicked again
        setSortAscending(!sortAscending);
      } else {
        setSortColumn(columnIndex);
        setSortAscending(true);
      }
    }
  };

  // Pagination
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  // Calculate the starting and ending index for the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  return (
    <Table variant="striped" colorScheme="blackAlpha" size={size}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <Thead>
        <Tr>
          {headers.map((header, idx) => (
            <Th
              key={idx}
              onClick={() => handleSort(idx)}
              cursor={sorting ? "pointer" : "default"}
              _hover={sorting ? { color: "blue.500" } : {}}
            >
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows
          .slice()
          .sort((a, b) => {
            if (sortColumn >= 0) {
              const aValue = a[sortColumn];
              const bValue = b[sortColumn];
              if (typeof aValue === "string" && typeof bValue === "string") {
                return sortAscending
                  ? aValue.localeCompare(bValue)
                  : bValue.localeCompare(aValue);
              }
            }
            return 0;
          })
          .slice(startIdx, endIdx)
          .map((row, idx) => (
            <Tr key={idx}>
              {row.map((cell, cellIdx) => (
                <Td key={cellIdx}>
                  {cellIdx === 6 ? (
                    <a href={cell.toString()} target="_blank">
                      <button>Select</button>
                    </a>
                  ) : cellIdx === 5 ? (
                    <chakra.button
                      backgroundColor={
                        cell === "Paid"
                          ? "#c6f6d4"
                          : cell === "Waiting"
                          ? "yellow"
                          : "#FED6D7"
                      }
                      borderRadius={"20px"}
                      padding={"5px 20px"}
                    >
                      {cell}
                    </chakra.button>
                  ) : (
                    cell
                  )}
                </Td>
              ))}
            </Tr>
          ))}
      </Tbody>
      {pagination && (
        <Tfoot>
          <Tr>
            <Td colSpan={headers.length} textAlign="center">
              <chakra.div display="inline-block" mx={2}>
                <chakra.button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  color={currentPage === 1 ? "grey" : "blue.500"}
                  cursor="pointer"
                  _disabled={{ cursor: "default" }}
                >
                  Previous
                </chakra.button>
              </chakra.div>
              <chakra.div display="inline-block" mx={2}>
                <chakra.button
                  onClick={handleNextPage}
                  disabled={endIdx >= rows.length}
                  color={endIdx >= rows.length ? "grey" : "blue.500"}
                  cursor="pointer"
                  _disabled={{ cursor: "default" }}
                >
                  Next
                </chakra.button>
              </chakra.div>
            </Td>
          </Tr>
        </Tfoot>
      )}
    </Table>
  );
};

export default DataTable;
