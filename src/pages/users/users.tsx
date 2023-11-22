import { useEffect, useState } from "react"
import UserService from "../../services/user.service"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });

    const columns: GridColDef[] = [
        {
            field: 'id', headerName: 'Id'
        }, {
            field: 'firstName', headerName: 'First Name'
        }, {
            field: 'Link', sortable: false, filterable: false, renderCell: (params) => {
                return <Link to={`/edituser/${params.row.id}`}>Edit</Link>
            }
        }]
    useEffect(() => {
        UserService.getAll().then(
            d => {
                console.log('log user response');
                console.log(d);
                setUsers(d.data.users)
                setLoading(false);
            }
        )
    }, []);
    return (<>
        <h1>welcome users</h1>
        {
            loading ?
                <Spinner animation="border" variant="primary" />
                :
                <DataGrid columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    
                    pageSizeOptions={[5, 10, 25]}
                    rows={users} />
        }
    </>);
}
export default Users