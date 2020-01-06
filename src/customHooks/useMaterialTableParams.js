import {useState, useEffect} from "react";

/**
 * @author Shankar Morwal
 * Custom hook which create stateful logic of material tables.
 * @returns {{numberRowPerPage: number, pageNumber: number, pageSize: number, searchText: string, setSearchFilter: setSearchFilter, handlePageNumberChange: handlePageNumberChange, handleChangeRowPerPage: handleChangeRowPerPage}}
 */
export default function useMaterialTableParams(){
    const [numberRowPerPage, setNumberOfRowsPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTimeout, setSearchTimeout] = useState();
    const [searchText, setSearchText] = useState('');
    // Change number of raw per pages
    function handleChangeRowPerPage(rowsPerPage) {
        setPageSize(rowsPerPage);
        setPageNumber(1);
        setNumberOfRowsPerPage(rowsPerPage);
    }

    //fetch data
    useEffect(() => {
        return () => {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
        };
    }, []);

    // Change pages on select next or previous
    function handlePageNumberChange(event, page) {
        setPageNumber(page);
    }
    /*
     * FilterData search the data and get the list data
     */
    function setSearchFilter(event) {
        setPageNumber(1);
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        if (event.target.value.length === 0 || event.target.value.length >= 2) {
            const value = event.target.value;
            let timeout = setTimeout(() => {
                setSearchText(value);
            }, 300);
            setSearchTimeout(timeout);
        }
    }

    return {
        numberRowPerPage,
        pageNumber,
        pageSize,
        searchText,
        setSearchFilter,
        handlePageNumberChange,
        handleChangeRowPerPage
    };
}
