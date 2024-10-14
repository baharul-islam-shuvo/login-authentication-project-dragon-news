import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
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
            <div className="p-4">
                <h2 className="mb-4">Find Us On</h2>
                <a className="p-3 flex text-sm items-center border rounded-t-md" href="">
                    <FaFacebook className="mr-3" />
                    <span>Facebook</span>
                </a>
                <a className="p-3 flex text-sm items-center border-x" href="">
                    <FaTwitter className="mr-3" />
                    <span>twitter</span>
                </a>
                <a className="p-3 flex text-sm items-center border rounded-b-md" href="">
                    <AiFillInstagram className="mr-3" />
                    <span>instagram</span>
                </a>
            </div>
            
            {/* QZone */}
            <div className="p-4">
                <h2 className="mb-4">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;