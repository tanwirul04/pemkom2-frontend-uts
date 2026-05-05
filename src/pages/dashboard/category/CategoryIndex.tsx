import { Link } from "react-router-dom";    

export default function CategoryIndex() {
    return (
        <div>
            <h1>Halaman Category</h1>

            <Link to="/dashboard/category/create" 
            className="p-2 bg-red-900 text-white rounded mt-3 inline-block">
                Add New Category
            </Link>
        </div>
    );
}