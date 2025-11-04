import { useState } from "react"
import "../style/workExp.css"

const emptyWork = () => ({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    isEditing: true
})

function WorkExp() {
    const [forms, setForms] = useState([emptyWork()]);
    const [errors, setErrors] = useState({});

    const addWork = () => {
        setForms(prev => [...prev, emptyWork()]);
        setErrors({});
    }

    const deleteWork = (index) => {
        if (index === 0) return;
        setForms(prev => prev.filter((_, idx) => idx !== index));
        setErrors({});
    }

    const handleChange = (index, field, value) => {
        setForms(prev => {
            const next = [...prev];
            next[index] = { ...next[index], [field]: value };
            return next;
        });
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
        if (!form.companyName.trim()) newErrors.companyName = "Company name is required";
        if (!form.positionTitle.trim()) newErrors.positionTitle = "Position title is required";
        if (!form.responsibilities.trim()) newErrors.responsibilities = "Responsibilities are required";
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
            if (!validateForm(index, form)) return;
        }
        setForms(prev => {
            const next = [...prev];
            next[index] = { ...next[index], isEditing: !next[index].isEditing };
            return next;
        });
    }

    return (
        <div className="section-container work">
            <p style={{marginBottom:"20px"}}>Work Experience</p>
            {forms.map((form, idx) => (
                <div key={idx} className="section-container section work">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p>Experience {idx + 1}</p>
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
                                    onClick={() => deleteWork(idx)}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="form-field-title">Company Name</p>
                    <input 
                        className={`form-field-input education ${errors[idx]?.companyName ? 'error' : ''}`}
                        placeholder="Company Name"
                        value={form.companyName}
                        onChange={(e) => handleChange(idx, "companyName", e.target.value)}
                        disabled={!form.isEditing}
                    />
                    {errors[idx]?.companyName && <p className="error-message">{errors[idx].companyName}</p>}

                    <p className="form-field-title">Position Title</p>
                    <input 
                        className={`form-field-input education ${errors[idx]?.positionTitle ? 'error' : ''}`}
                        placeholder="Senior Software Engineer"
                        value={form.positionTitle}
                        onChange={(e) => handleChange(idx, "positionTitle", e.target.value)}
                        disabled={!form.isEditing}
                    />
                    {errors[idx]?.positionTitle && <p className="error-message">{errors[idx].positionTitle}</p>}

                    <p className="form-field-title">Main Responsibilities</p>
                    <input 
                        className={`form-field-input education ${errors[idx]?.responsibilities ? 'error' : ''}`}
                        placeholder="Describe your main responsibilities and achievements ..."
                        value={form.responsibilities}
                        onChange={(e) => handleChange(idx, "responsibilities", e.target.value)}
                        disabled={!form.isEditing}
                    />
                    {errors[idx]?.responsibilities && <p className="error-message">{errors[idx].responsibilities}</p>}

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
            <div className="action-buttons work">
                <button 
                    type="button"
                    className="form-submit-button education one"
                    onClick={addWork}
                >
                    + Add Work Experience
                </button>
            </div>
        </div>
    )
}

export default WorkExp;