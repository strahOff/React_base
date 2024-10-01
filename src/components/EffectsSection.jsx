import Button from "./Button/Btn";
import { useState, useEffect, useCallback } from "react";
import Modal from "./Modal/Modal";
import useInput from "./hooks/useinput";

export default function EffectSection(){
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false) 
    const [users, setUsers] = useState([])
    
    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await responce.json()
        setUsers(users)
        setLoading(false)
    }, [])  

    // async function fetchUsers() {}

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    function openModal(){
        setModal(true)
    }
    return(
    <section>
        <h3>Effects</h3>

        <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть информацию</Button>

        <Modal open={modal}>
            <h3>Hello from modal</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Fuga eveniet recusandae numquam voluptates! 
                Quaerat reiciendis recusandae provident praesentium qui eveniet, 
                repellat modi nam nostrum quae hic temporibus quod ut consectetur?
            </p>
            <Button onClick={() => setModal(false)}>Close modal</Button>
        </Modal>
        {loading && <p>Loading...</p>}

        {!loading && (
            <>
                <input type="text" className="control" {... input} />
                <h6>{input.value}</h6>
                <ul>
                    {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())
                    )
                    .map((user) => (
                        <li key={user.id}>{user.name}</li>
                        ))}
                </ul>
            </>
        )}
    </section>
    )
}