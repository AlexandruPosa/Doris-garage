import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div className="map" >
                <iframe className="container-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.716358642311!2d23.93082371497822!3d46.17630169366642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bf83d1bb37203%3A0x8244c9a3dd9f8af6!2sStrada%20Tudor%20Vladimirescu%2029%2C%20Blaj%20515400!5e0!3m2!1sen!2sro!4v1599758762567!5m2!1sen!2sro" style={{ width: "100%" }}
                ></iframe>

            </div >
        );
    }
}

export default Contact;