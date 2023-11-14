import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "title", label: "Tiêu đề", minWidth: 300 },
  { id: "date", label: "Ngày đăng kí", minWidth: 100 },
];

function createData(title, date, detail) {
  return { title, date, detail };
}

const rows = [
  createData("Thong bao nhap hoc", "26/11/2001", "detail"),
  createData("Thong bao nhap hoc", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail"),
  createData("Thong bao dang ki de tai", "26/11/2001", "detail")
  //... other data
];

export default function NotificationList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (row) => {
    console.log("Detail:", row.detail);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    onClick={() => handleRowClick(row)}
                  >
                    {columns.map((column) => {
                      if (column.id !== "detail") {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                      return null; // Hide the detail column from display
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
