// @ts-ignore
export default function Event({event}) {
    return (
        <>
            <a href="#" key={event.id} className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span
                          className="avatar bg-red text-white w-9 h-9 fs-17 me-3">GD</span> {event.title} </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Full time </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> San Francisco, US </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
            </a>
        </>
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/data.json')
    const events = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            events,
        },
    }
}