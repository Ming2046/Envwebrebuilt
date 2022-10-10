// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xqkjlkev");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
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
                                    <div className="col-lg-6 col-md-6">
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