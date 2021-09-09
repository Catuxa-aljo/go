import { useEffect, useState } from "react"
import userService from '../../../services/user.service'
import EditProfile from "./Edit"

function Me() {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        userService.profile()
            .then(user => {
                setUser(user)
                setIsLoading(false)
            })
    },[])

    return(
        <>{!isLoading && 
        <div>
            <img src={user.avatar} alt={user.name} />
            <h1>{user.name}</h1>            
        </div>}
        <EditProfile {...user} />
        </>
    )

}

export default Me