import { DataGrid } from "@mui/x-data-grid";
import React from "react";

//css
import "../../assets/css/utils/datatabel.css";

function DataTabel({ rows, columns }) {
  return (
    <>
      <DataGrid
        autoPageSize={false}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        getCellClassName={(params) => {
          let cellClass = [];

          cellClass.push("data-table-allcell");
          return cellClass;
        }}
      />
    </>
  );
}

export default DataTabel;
