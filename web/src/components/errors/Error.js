import '../../index.css';

function Error() {
    return (
        <div className="container">
            {window.location.pathname === '/404' && 
            <>
            <h1>ERROR 404</h1>
            <h2>Wow, the world is big so we have troubles finding what you've been looking for</h2>
            <h3>May you wanna double check what you were searching?</h3>
            <button>Start over</button>
            </>
            }
            {window.location.pathname === '/403' && 
            <>
            <h1>ERROR 403 Forbidden</h1>
            <h2>Ahoy, you pirate!</h2>
            <h3>You cant't do that my friend</h3>
            <button>Start over</button>
            </>
            }
        </div>
    )
}

export default Error