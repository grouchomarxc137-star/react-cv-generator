import { useState } from "react"
import "../style/generalInfo.css"

function GeneralInfo() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        isEditing: true
    });
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: null
            }));
        }
    }

    const validateForm = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        if (!form.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    }

    const toggleEdit = () => {
        if (form.isEditing) {
            if (!validateForm()) return;
        }
        setForm(prev => ({
            ...prev,
            isEditing: !prev.isEditing
        }));
        setErrors({});
    }

    return (
        <div className="section-container general">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }}>
                <p>General Information</p>
                <button 
                    className="form-submit-button education one"
                    onClick={toggleEdit}
                    style={{ width: 'auto', marginTop: 0 }}
                >
                    {form.isEditing ? 'Save' : 'Edit'}
                </button>
            </div>

            <p className="form-field-title">Full Name</p>
            <input  
                placeholder="Enter your full name" 
                className={`form-field-input ${errors.fullName ? 'error' : ''}`}
                value={form.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                disabled={!form.isEditing}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}

            <p className="form-field-title">Email</p>
            <input  
                placeholder="your.email@example.com" 
                className={`form-field-input ${errors.email ? 'error' : ''}`}
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                disabled={!form.isEditing}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <p className="form-field-title">Phone Number</p>
            <input 
                placeholder="+39 333 5555 666" 
                className={`form-field-input ${errors.phoneNumber ? 'error' : ''}`}
                value={form.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                disabled={!form.isEditing}
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>
    )
}

export default GeneralInfo;
