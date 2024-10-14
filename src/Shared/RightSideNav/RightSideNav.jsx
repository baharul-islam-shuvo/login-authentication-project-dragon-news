import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;