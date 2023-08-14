import React, { useState } from 'react';

const ProfileTabPanel = () => {

    // Simple Tab for beginners
    const [isTabActive1, setIsTabActive1] = useState(true);
    const [isTabActive2, setIsTabActive2] = useState(false);
    const [isTabActive3, setIsTabActive3] = useState(false);

    const handleClick1 = () => {
        if (!isTabActive1) {
            setIsTabActive1(true);
            setIsTabActive2(false);
            setIsTabActive2(false);
        }
    }

    const handleClick2 = () => {
        if (!isTabActive2) {
            setIsTabActive2(true);
            setIsTabActive1(false);
            setIsTabActive3(false);
        }
    }
    const handleClick3 = () => {
        if (!isTabActive3) {
            setIsTabActive3(true);
            setIsTabActive1(false);
            setIsTabActive2(false);
        }
    }


    return (
        <div className='profile__tab-panel'>
            <div className='tab-heading'>
                <ul>
                    <li>
                        <button className={isTabActive1 ? 'active' : ''} onClick={handleClick1}>My Details</button>
                    </li>
                    <li>
                        <button className={isTabActive2 ? 'active' : ''} onClick={handleClick2}>My Education</button>
                    </li>
                    <li>
                        <button className={isTabActive3 ? 'active' : ''} onClick={handleClick3}>My Skills</button>
                    </li>
                </ul>
            </div>
            <div className='tab-body'>
                <div className={isTabActive1 ? 'tab-content active' : 'tab-content'} >
                    <ul className='row'>
                        <li className='col-sm-6'>
                            <span>My Name :</span>
                            <label>Arjun Bhusal</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>My Phone No. :</span>
                            <label>+977- 9866312827</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>My Email :</span>
                            <label>arjunbhusal2000@gmail.com</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>My Address :</span>
                            <label>Chunikhel-13,Budhanilkantha</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>Language :</span>
                            <label>Nepali, English, Hindi</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>My Nationality :</span>
                            <label>Nepali</label>
                        </li>
                    </ul>
                </div>
                <div className={isTabActive2 ? 'tab-content active' : 'tab-content'} >
                    <ul className='row'>
                        <li className=' col-sm-4'>
                        {/* <div class="icon">
                            <i class="fas fa-user-graduate"></i>
                        </div> */}
                            <span class="time">2019-Present(Bachelor)</span>
                            <label>Aadim National College(TU)</label>
                            <label>Chuchepati, Kathmandu, Nepal</label>
                        </li>
                        <li className='col-sm-4'>
                            <span class="time">2017-2019(NEB)</span>
                            <label>Pushpalal Memorial College</label>
                            <label>Chabhail, Kathmandu, Nepal</label>
                        </li>
                        <li className='col-sm-4'>
                            <span class="time">2005-2017(SEE)</span>
                            <label>Pioneer Public School</label>
                            <label>Kapan, Kathmandu, Nepal</label>
                        </li>
                        {/* <li className='col-sm-6'>
                            <span>2021</span>
                            <label>International Photography Gran</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>2016</span>
                            <label>Nikon Small World Competition</label>
                        </li> */}
                    </ul>
                </div>
                <div className={isTabActive3 ? 'tab-content active' : 'tab-content'} >
                    <div className='skills__range'>
                        <h4>Develoment <span className='skills__range-percentage'>95%</span></h4>
                        <span className='skills__range-bar' style={{ width: '95%' }}></span>
                    </div>
                    <div className='skills__range'>
                        <h4>Design <span className='skills__range-percentage'>80%</span></h4>
                        <span className='skills__range-bar' style={{ width: '80%' }}></span>
                    </div>
                    <div className='skills__range'>
                        <h4>SEO & SEM <span className='skills__range-percentage'>50%</span></h4>
                        <span className='skills__range-bar' style={{ width: '50%' }}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTabPanel;