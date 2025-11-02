import "../style/educationInfo.css"

function EducationInfo(){
    return(
        <div className="section-container education">
            <p style={{marginBottom:"20px"}}>Education</p>
            <div className="section-container section">
                <p>Education 1</p>
                <p className="form-field-title">School Name</p>
                <input className="form-field-input education" placeholder="University Name"></input>
                <p className="form-field-title">Title of Study</p>
                <input className="form-field-input education" placeholder="Bachelor of Science in Computer Science"></input>
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
            <div className="action-buttons">
            <button className="form-submit-button education one">+ Add Education</button>
            <button className="form-submit-button education">Submit</button>
            </div>
        </div>
    )
}
export default EducationInfo;