import { Link } from "react-router-dom";    

export default function SpeakerIndex() {
    return (
        <div>
            <h1>Halaman Pembicara</h1>

            <Link to="/dashboard/speaker/create" 
            className="p-2 bg-red-900 text-white rounded mt-3 inline-block">
                Add New Speaker
            </Link>
        </div>
    );
}