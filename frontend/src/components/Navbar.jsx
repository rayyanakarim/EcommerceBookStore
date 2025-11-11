
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl max-auto px-4 py-6 font-primary">
        <nav className="flex justify-between items-center">
            {/** LeftNavigation */}
            <div>
                <Link to="/">
                <HiMiniBars3BottomLeft />
                </Link>
                </div>

            {/** RightNavigation */}
            <div>Right Navigation</div>
        </nav>
    </header>
  )
}

export default Navbar