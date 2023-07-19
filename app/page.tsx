"use client";
import { Box, Heading } from "@chakra-ui/react";
import DataTable from "./Datatable/page";

const headers = [
  "Timestamp",
  "Purchase Id",
  "Mail",
  "Name",
  "Source",
  "Status",
  "Select",
];
const rows = [
  [
    "35 minutes ago",
    "27001001",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Failed",
    "www.google.com",
  ],
  [
    "9 hours ago",
    "27001002",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "10 hours ago",
    "27001003",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "11 hours ago",
    "27001004",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "12 hours ago",
    "27001005",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Paid",
    "www.google.com",
  ],
  [
    "13 hours ago",
    "27001006",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "35 minutes ago",
    "27001001",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Failed",
    "www.google.com",
  ],
  [
    "9 hours ago",
    "27001002",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "10 hours ago",
    "27001003",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "11 hours ago",
    "27001004",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "12 hours ago",
    "27001005",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Paid",
    "www.google.com",
  ],
  [
    "13 hours ago",
    "27001006",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "35 minutes ago",
    "27001001",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Failed",
    "www.google.com",
  ],
  [
    "9 hours ago",
    "27001002",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "10 hours ago",
    "27001003",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "11 hours ago",
    "27001004",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
  [
    "12 hours ago",
    "27001005",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Paid",
    "www.google.com",
  ],
  [
    "13 hours ago",
    "27001006",
    "hello123@gmail.com",
    "John Doe",
    "",
    "Waiting",
    "www.google.com",
  ],
];

export default function Home() {
  return (
    <Box p={8}>
      <Heading size="lg" mb={4}>
        Bookings
      </Heading>
      <DataTable
        headers={headers}
        rows={rows}
        caption="Bookings"
        sorting
        pagination
        size={"lg"} //available in 3 sizes: sm, md, lg. The default size is lg.
      />
    </Box>
  );
}
