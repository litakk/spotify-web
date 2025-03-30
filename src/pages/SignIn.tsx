import { Link } from "react-router-dom";

interface SignInProps {
    
}
 
const SignIn: React.FC<SignInProps> = () => {
    return ( 
        <>
        <Link to="/me">SignIn</Link>
        </>
     );
}
 
export default SignIn;