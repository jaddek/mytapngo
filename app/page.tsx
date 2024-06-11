import Form from "../components/filter/form"
import Container from "../components/container/container"

export default function Page() {
    return (
        <section id="snippet-2" className="wrapper bg-light wrapper-border">
            <div className="container pt-15 pt-md-17 pb-13 pb-md-14">
                <div className="row text-center">
                    <div className="col-xl-10 mx-auto">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">Coming ...</h2>
                        <h3 className="display-4 mb-10 px-xxl-15">...</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-10 mx-auto">
                        <Form/>
                        <Container/>
                    </div>
                </div>
            </div>
        </section>
    );
}
