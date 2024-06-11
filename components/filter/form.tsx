import Filter from "./filter"
export default function Form()
{
    return (
        <form className="filter-form mb-10">
            <div className="row">
                <Filter/>
                <Filter/>
                <Filter/>
            </div>
        </form>
    );
}