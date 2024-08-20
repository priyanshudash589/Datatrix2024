import React from "react";
import supabase from "../supabase";

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional: theme for the Data Grid 

import {
    useRef,
    useEffect,
    useState
} from "react";



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

    const onGridReady = (params) => {
        params.api.sizeColumnsToFit();
    };

    const Gridref = useRef(null);


    React.useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div
            className="flex flex-col items-center center bg-gray-800"
            style={{ height: "100vh" }}
        >
            <h1 className="text-3xl font-bold mt-5 text-white">Admin Panel</h1>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white m-2 font-bold py-2 px-4 rounded mt-5"
                    onClick={fetchdata}
                >
                    Refresh Data
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white m-2 font-bold py-2 px-4 rounded mt-5"
                    onClick={() => Gridref.current.api.exportDataAsCsv()}
                >
                    Export Data
                </button>
            </div>
            <div className="ag-theme-quartz m-5" style={{ height: '80%', width: '80%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                    onGridReady={onGridReady}
                    ref={Gridref}
                />
            </div>
        </div>
    );
}

