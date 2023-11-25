export default function ContactPage() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6">
                Lottie Image
            </div>
                <div className="col-sm-12 col-md-6">
        <form>
        <div className="col-12">
         <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Enter Name" />
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>

        </form>
        </div>
        </div>
        </div>
    )
}