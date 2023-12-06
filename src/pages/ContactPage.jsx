import hireme from '../images/hire.png'

export default function ContactPage() {

    return (
        <div className="container h-100 contact-page">
            <div className="row">
            <div className="col-sm-12 col-md-6 hireme">
               <img className="hireme" width= "300" height= "300" src={hireme} />
        </div>
                <div className="col-sm-12 col-md-6">
        <div className="contactbox">
        <form>
        <div className="col-12">
         <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Enter Name" />
        </div>
        <div className="col-12">
         <label htmlFor="inputEmail" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="inputEmail3" placeholder="Enter email" />
        </div>
        <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button className="resumebutton innerbutton" type="submit">Submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>
    );
}