import "./Contact.css";

const Contact = ({firstName, lastName, phone, gender}) => {
    return <div className="contact" >
                <img className="contact__gender" src={gender} alt="cont act__gender"/>
                <div className="contact__inform">
                    <div className="contact__name">
                        <div className="name__firstName">{firstName}</div>
                        <div className="name__lastName">{lastName}</div>
                    </div>
                    <div className="contact__phone">{phone}</div>
                </div>
            
            </div>
}

export default Contact;