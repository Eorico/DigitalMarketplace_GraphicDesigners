import React, { useState } from "react";
import { Camera } from "lucide-react";
import '../../../../style/customerPortal.css';

export default function ProfileCustomer () {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState(
        {
            name: "Eorico Gonzales",
            email: "eorico@gmail.com",
            role: "customer",
            avatar: '/assets/boyLogo.png'
        }
    );
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile, [e.target.name]: e.target.value
        });
    }

    return (
        <div className="profile-page">
            <div className="profile-card">

                <div className="profile-avatar">
                    <img src={profile.avatar} alt="Profile" />
                    <button className="avatar-edit-btn">
                        <Camera size={20}/>
                    </button>
                </div>
                
            </div>

            <div className="profile-info">

                <div className="profile-field">
                    <label>Name</label>
                    <input 
                        name="name" 
                        value={profile.name}
                        onChange={changeHandler}
                        disabled={!isEditing}
                    />
                </div>

                <div className="profile-field">
                    <label>Email</label>
                    <input 
                        name="email" 
                        value={profile.email}
                        onChange={changeHandler}
                        disabled 
                    />
                </div>

                <div className="profile-field">
                    <label>Role</label>
                    <input 
                        value={profile.role}
                        disabled
                    />
                </div>

                <div className="profile-actions">
                    {
                        isEditing ? (
                            <button
                                className="save-profile-btn"
                                onClick={() => setIsEditing(false)}
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button
                                className="edit-profile-btn"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profile
                            </button>
                        )
                    }
                </div>

            </div>
        </div>
    );
}