import { Link } from "react-router-dom"

const RefreshBtn = ({ path, get }) => {
    return (
        <div className="flex justify-center pt-10">
            <Link to={path} className="btn shadow-md" onClick={get}>Refresh</Link>
        </div>
    )
}

export default RefreshBtn