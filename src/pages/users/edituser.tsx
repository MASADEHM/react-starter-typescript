import { useParams } from "react-router-dom"

const Edituser=()=>{
    const p=useParams();
    return(<h1>
        {p.id}</h1>)
}
export default Edituser