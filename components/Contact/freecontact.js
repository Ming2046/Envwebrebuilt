// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function ContactForm() {
    const [state, handleSubmit] = useForm("xqkjlkev");
    if (state.succeeded) {
        return (
            <div className="contact-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src="/images/contact.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="text"
                                                cols="30"
                                                rows="6"
                                                placeholder="Write your message..."
                                                className="form-control"

                                                required
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="submit-btn mt-2">
                                            Send Message!
                                        </button>
                                        <input type={"reset"}></input>
                                        <p>Thank you for contacting us!</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="contact-section ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-image">
                            <img src="/images/contact.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="text"
                                                cols="30"
                                                rows="6"
                                                placeholder="Write your message..."
                                                className="form-control"

                                                required
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="submit-btn mt-2">
                                            Send Message!
                                        </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;