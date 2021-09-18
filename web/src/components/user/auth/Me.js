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
        
        <div className="container">
            
            <div className="profile">      
            
            <img src={user.avatar} alt={user.name} />
             <div>      
             <h1>Welcome back {user.name}!</h1>
                <EditProfile {...user} />
             </div>
            </div>
        </div>
        }
        
        </>
    )

}

export default Me