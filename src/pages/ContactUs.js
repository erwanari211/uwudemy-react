import React from 'react';

/**
 * 2. Class Component
 * 6. Extracting Component
 */
class ContactUs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            message: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // 4. LifeCycle Method
    componentDidMount(){
        console.log('msg from ContactUs')
    }

    // 11. Form (Uncontrolled maupun controlled)
    handleChange(event) {
        this.setState({value: event.target.value});
    }       

    // 11. Form (Uncontrolled maupun controlled)
    onChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    // 11. Form (Uncontrolled maupun controlled)
    onSubmit(event) {
        event.preventDefault()
        console.log(`
            Email: ${this.state.email}
            Message: ${this.state.message}
        `)
        alert('Message sent')
        this.setState({ email: '', message: '' })
    }

    render() {
        const { email, message } = this.state;

        return (
            <div className="container">
                <h2>Contact Us</h2>

                {/* 11. Form (Uncontrolled maupun controlled) */}    
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" required className="form-control" placeholder="Enter email"
                            name="email"
                            value={email} onChange={this.onChange} />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" required  rows="6" placeholder="Your message"
                            name="message"
                            value={message} onChange={this.onChange}></textarea>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
    
            </div>        
        );
    }    
}

export default ContactUs;
