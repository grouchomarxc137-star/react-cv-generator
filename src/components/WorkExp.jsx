import "../style/workExp.css"

function WorkExp(){
    return(
        <div className="section-container work">
            <p style={{marginBottom:"20px"}}>Work Experience</p>
            <div className="section-container section work">
                <p>Experience 1</p>
                <p className="form-field-title">Company Name</p>
                <input className="form-field-input education" placeholder="Company Name"></input>
                <p className="form-field-title">Position Title</p>
                <input className="form-field-input education" placeholder="Senior Software Engineer"></input>
                <p className="form-field-title">Main Responsibilities</p>
                <input className="form-field-input education" placeholder="Describe your main responsabilities and achievements ..."></input>
                <div className="dates-container">
                    <div className="date-div">
                    <p className="form-field-title">Start Date</p>
                    <input type="date" className="form-field-input date"></input>
                    </div>
                    <div className="date-div">
                    <p className="form-field-title">End Date</p>
                    <input type="date" className="form-field-input date"></input>
                    </div>
                </div>
            </div>
            <div className="action-buttons work">
            <button className="form-submit-button education one">+ Add Education</button>
            <button className="form-submit-button education">Submit</button>
            </div>
        </div>
    )
}
export default WorkExp;