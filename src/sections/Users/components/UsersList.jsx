import { useEffect, useState } from "react"
import UsersListITem from "./components/UsersListItem"

export default function UsersList() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact')
          .then(response => response.json())
          .then(setUser)
      }, [])
      console.log(user)

    return (
        <ul className="users-list">
          <UsersListITem user={user}/>
        </ul>
    )
}