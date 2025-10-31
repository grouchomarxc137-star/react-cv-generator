import "../style/generalInfo.css"

function GeneralInfo(){
    return(
        <div className="general-info-container">
            <p>General Information</p>
            <p className="form-field-title">Full Name</p>
            <input placeholder="Enter your full name" className="form-field-input"></input>
            <p className="form-field-title">Email</p>
            <input placeholder="your.email@example.com" className="form-field-input"></input>
            <p className="form-field-title">Phone Number</p>
            <input placeholder="+39 333 5555 666" className="form-field-input"></input>
            <button className="form-submit-button">Submit</button>
        </div>
    )
}
export default GeneralInfo;