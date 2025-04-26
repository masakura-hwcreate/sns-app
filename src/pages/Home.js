import { useContext } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";

function Home() {
    const {currentUser} = useContext(SessionContext);

    if(currentUser == null) return <Navigate replace to="/signin"/>;
    
    return <div>this is Home</div>
}
export default Home;