import { Link } from "react-router-dom";  

export default function EventIndex() {
    return (
        <div>
            <h1>Halaman Event</h1>

            <Link to="/dashboard/event/create" 
            className="p-2 bg-red-900 text-white rounded mt-3 inline-block">
                Add New Event
            </Link>
        </div>
    );
}