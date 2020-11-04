import React, {useState} from 'react';


const ContactItem = (props) => {
    const [contactData, setContactData] = useState(props.text);

    const toggle = () => {
        if (contactData === props.text) {
            setContactData(props.secondText);
        } else {
            setContactData(props.text);
        }
    }

    return (
        <div onClick={toggle} className="content-item wrap"
            style={{width: props.width, backgroundColor: props.color, color: props.font}}
        >
           <p className='contact-data'>{contactData} </p> 
        </div>
    )
};


const Content4 = () => {
    // const git = `click ${<a href='https://github.com/pokorra'> here</a>}`
    return (
        <div className="content">
            <ContactItem 
                text=" @ email" secondText="patrycja.pe@gmail.com" color="#ffde59" width="50%" font="black"
                />
            <ContactItem 
                text="phone number" secondText="(48)723-468-495" color="#3c5947" width="49%" font="white"
                />
        </div>
    )
};

export default Content4;