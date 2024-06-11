export default function Filter()
{
    return (
        <div className="col-md-4 mb-3">
            <div className="form-select-wrapper">
                <select className="form-select" aria-label="">
                    <option>Location</option>
                    <option value="location1">Auckland, NZ</option>
                    <option value="location3">Wellington, NZ</option>
                    <option value="location2">Christchurch, NZ</option>
                </select>
            </div>
        </div>
    );
}