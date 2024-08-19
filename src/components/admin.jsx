import React from "react";
import supabase from "../supabase";

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional: theme for the Data Grid 



export function Admin() {

    const [rowData, setRowData] = React.useState([]); // State to store the data fetched from the database
    const [columnDefs, setColumnDefs] = React.useState([]); // State to store the column definitions for the Data Grid



    const fetchdata = async () => {
        const { data, error } = await supabase
            .from("registration")
            .select("*");
        if (error) {
            console.log("error", error);
        } else {
            console.log(data);
            setRowData(data);
            setColumnDefs(Object.keys(data[0]).map((key) => {
                return {
                    headerName: key,
                    field: key,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    flex: 1,
                    minWidth: 150,
                    resizable: true,
                    editable: true,
                    pivot: true,
                };

            }));
        }
    }

    React.useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center"
            style={{ height: "100vh" }}
        >
            <div className="ag-theme-quartz m-5" style={{ height: '80%', width: '80%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                    domLayout='autoHeight'
                />
            </div>
        </div>
    );
}

