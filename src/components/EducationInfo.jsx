import "../style/educationInfo.css"
import {useState} from "react"

const emptyEducation = () => ({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
    isEditing: true
})

function EducationInfo(){
    const [forms, setForms] = useState([emptyEducation()]);
    const [errors, setErrors] = useState({});
    
    const addEducation = () => {
        setForms(prev => [...prev, emptyEducation()]);
        setErrors({});
    };

    const deleteEducation = (index) => {
        if (index === 0) return;
        setForms(prev => prev.filter((_, idx) => idx !== index));
        setErrors({});
    };

    const handleChange = (index, field, value) => {
        setForms(prev => {
            const next = [...prev]
            next[index] = {...next[index], [field]: value}
            return next
        });
        // Clear error when user starts typing
        if (errors[index]?.[field]) {
            setErrors(prev => ({
                ...prev,
                [index]: {
                    ...prev[index],
                    [field]: null
                }
            }));
        }
    }

    const validateForm = (index, form) => {
        const newErrors = {};
        if (!form.schoolName.trim()) newErrors.schoolName = "School name is required";
        if (!form.titleOfStudy.trim()) newErrors.titleOfStudy = "Title of study is required";
        if (!form.startDate) newErrors.startDate = "Start date is required";
        if (!form.endDate) newErrors.endDate = "End date is required";
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(prev => ({...prev, [index]: newErrors}));
            return false;
        }
        return true;
    }

    const toggleEdit = (index) => {
        const form = forms[index];
        if (form.isEditing) {
            // Trying to save - validate first
            if (!validateForm(index, form)) return;
        }
        setForms(prev => {
            const next = [...prev]
            next[index] = {...next[index], isEditing: !next[index].isEditing}
            return next
        });
        setErrors({});
    }

    return (
        <div className="section-container education">
            <p style={{ marginBottom: "20px" }}>Education</p>

            <div className="section-container section">
                {forms.map((form, idx) => (
                    <div key={idx} className="education-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p>Education {idx + 1}</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button 
                                    type="button"
                                    className="form-submit-button education one"
                                    onClick={() => toggleEdit(idx)}
                                >
                                    {form.isEditing ? 'Save' : 'Edit'}
                                </button>
                                {idx > 0 && (
                                    <button 
                                        type="button"
                                        className="form-submit-button education one"
                                        onClick={() => deleteEducation(idx)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>

                        <p className="form-field-title">School Name</p>
                        <input
                            className={`form-field-input education ${errors[idx]?.schoolName ? 'error' : ''}`}
                            placeholder="University Name"
                            value={form.schoolName}
                            onChange={(e) => handleChange(idx, "schoolName", e.target.value)}
                            disabled={!form.isEditing}
                        />
                        {errors[idx]?.schoolName && <p className="error-message">{errors[idx].schoolName}</p>}

                        <p className="form-field-title">Title of Study</p>
                        <input
                            className={`form-field-input education ${errors[idx]?.titleOfStudy ? 'error' : ''}`}
                            placeholder="Bachelor of Science in Computer Science"
                            value={form.titleOfStudy}
                            onChange={(e) => handleChange(idx, "titleOfStudy", e.target.value)}
                            disabled={!form.isEditing}
                        />
                        {errors[idx]?.titleOfStudy && <p className="error-message">{errors[idx].titleOfStudy}</p>}

                        <div className="dates-container">
                            <div className="date-div">
                                <p className="form-field-title">Start Date</p>
                                <input
                                    type="date"
                                    className={`form-field-input date ${errors[idx]?.startDate ? 'error' : ''}`}
                                    value={form.startDate}
                                    onChange={(e) => handleChange(idx, "startDate", e.target.value)}
                                    disabled={!form.isEditing}
                                />
                                {errors[idx]?.startDate && <p className="error-message">{errors[idx].startDate}</p>}
                            </div>
                            <div className="date-div">
                                <p className="form-field-title">End Date</p>
                                <input
                                    type="date"
                                    className={`form-field-input date ${errors[idx]?.endDate ? 'error' : ''}`}
                                    value={form.endDate}
                                    onChange={(e) => handleChange(idx, "endDate", e.target.value)}
                                    disabled={!form.isEditing}
                                />
                                {errors[idx]?.endDate && <p className="error-message">{errors[idx].endDate}</p>}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="action-buttons">
                    <button type="button" className="form-submit-button education one" onClick={addEducation}>
                        + Add Education
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EducationInfo