import React, { useState, useEffect } from "react"

const UsersList = () => {

    const [users, setUsers] = useState([{}])
    
    return (
        <div>
            <p>HOLA</p>

            {
                props.users && props.users.map(user => {
                    return (
                        <div key={user.codigo}>
                            <p>{user.tipo_problema}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersList;