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
                return { headerName: key, field: key };
            }));
        }
    }

    React.useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div className="ag-theme-quartz" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            />
        </div>
    );
}

