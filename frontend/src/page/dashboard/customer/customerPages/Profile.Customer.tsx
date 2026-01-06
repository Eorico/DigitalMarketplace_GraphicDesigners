import { Mail, MapPin, Phone, Shield, House, HousePlus, Building2, LucideWarehouse } from 'lucide-react';
import { useState } from 'react';
import type { CustomerInfoProfile } from '../../../../types/interfaces/interfaces';
import '../../../../style/customerPortal.css';

export default function ProfileCustomer () {
     const [customer] = useState<CustomerInfoProfile>({
        name: 'Eorico Gonzales',
        email: 'eorico@gmail.com',
        phoneNumber: 9954849506,
        address: 'Magdiwang Rd, Molino 3',
        country: 'Philippines',
        city: 'Bacoor City',
        brgy: 'Queensrow West',
        state: 'Cavite',
        zipCode: 4102,
        joinDate: 'January 5, 2026',
        verified: true,
     })

    return (
        <div className='profile'>

            <main className='profile-main'>
                <div className='profile-card'>
                    
                    <div className='profile-banner'></div>

                    <div className='profile-content'>
                        <div className='profile-top'>
                            <div className='profile-avatar'>
                                <img src="/assets/boyLogo.png" alt="profile" />
                            </div>
                            
                            <button className='profile-edit-btn'>Edit</button>
                        </div>

                        <h2>{customer.name}</h2>

                        <div className='profile-meta'>
                            {
                                customer.verified && (
                                    <span className='profile-verified-badge'>
                                        <Shield size={18}/>
                                        Verified Account
                                    </span>
                                )
                            }

                            <span className='profile-member-date'>
                                Member since {customer.joinDate}
                            </span>
                        </div>
                        
                        <div className='profile-grid'>
                            <section>

                                <h3>Contact Information</h3>

                                <div className='profile-info-block'>
                                    <span className='profile-icons'>
                                        <Mail size={23} style={{marginRight: 10}}/>
                                        <label className='profile-label'>Email Address</label>
                                    </span>
                                    <p className='profile-p'>- {customer.email}</p>
                                </div>

                                <div className='profile-info-block'>
                                    <span className='profile-icons'>
                                        <Phone size={23} style={{marginRight: 10}}/>
                                        <label className='profile-label'>Phone Number</label>
                                    </span>
                                    <p className='profile-p'>- {customer.phoneNumber}</p>
                                </div>

                            </section>

                            <section>

                                <h3>Address</h3>

                                <div className='profile-info-block'>
                                    <span className='profile-icons'>
                                        <MapPin size={23} style={{marginRight: 10}}/>
                                        <label className='profile-label'>Address</label>
                                    </span>
                                    <p className='profile-p'>- {customer.address}</p>
                                </div>

                                <div className='profile-info-address-grid'>
                                    <div>
                                        <span className='profile-icons'>
                                            <House size={23} style={{marginRight: 10}}/>
                                            <label className='profile-label'>City</label>
                                        </span>
                                        <p className='profile-p'>- {customer.city}</p>
                                    </div>

                                    <div>
                                        <span className='profile-icons'>
                                            <Building2 size={23} style={{marginRight: 10}}/>
                                            <label className='profile-label'>State/City</label>
                                        </span>
                                        <p className='profile-p'>- {customer.state}</p>
                                    </div>

                                    <div>
                                        <span className='profile-icons'>
                                            <LucideWarehouse size={23} style={{marginRight: 10}}/>
                                            <label className='profile-label'>Barangay</label>
                                        </span>
                                        <p className='profile-p'>- {customer.brgy}</p>
                                    </div>

                                    <div>
                                        <span className='profile-icons'>
                                            <HousePlus size={23} style={{marginRight: 10}}/>
                                            <label className='profile-label'>Zip Code</label>
                                        </span>
                                        <p className='profile-p'>- {customer.zipCode}</p>
                                    </div>
                                </div>

                            </section>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}