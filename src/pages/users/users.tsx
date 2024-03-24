import { FormEvent, useEffect, useState } from "react"

import { Checkbox, Spin } from "antd";
import { message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { usersService } from "../../services/users.service";
const Users = () => {
    const [userslist, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedIds, setIds] = useState<any[]>([])
    const selectedusers: any[] = ['Leanne Graham', 'Ervin Howell'] // to be loaded from the backend
    useEffect(() => {
        setLoading(true);

        //assign loaded Id's assuming it's loaded from the backend
        selectedusers.map(d => {
            if (!selectedIds.includes(d)) {
                selectedIds.push(d)
            }
        });
        usersService.get().then(d => {
            console.log(d.data);
            setUsers(d.data);
            setLoading(false);
        }).catch(err => {
            message.error(err.message)
        })
    }, [])

    const onCheckboxChange = (e: CheckboxChangeEvent) => {
        const name = e.target.name;
        console.log(selectedIds);
        if (e.target.checked) {
            setIds([...selectedIds, e.target.name])
        }
        else {
            setIds([...selectedIds.filter(v => v != name)])
        }
    }

    return (<>
        {loading && <Spin />}
        <h1>welcome users</h1>
        <br />
        {
            userslist.map(d => (
                <Checkbox key={d.id} defaultChecked={selectedusers.includes(d.name)} name={d.name} onChange={onCheckboxChange}>
                    {d.name}</Checkbox>
            ))
        }
        <br />
        <button onClick={(e) => { console.log(selectedIds) }}>Submit</button>
    </>)
}

export default Users;