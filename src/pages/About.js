import React from 'react';

/**
 * 2. Class Component
 * 6. Extracting Component
 */
class About extends React.Component {
    // 4. LifeCycle Method
    componentDidMount(){
        console.log('msg from About')
    }

    render() {
        return (
            <div className="container">
                <h2>About</h2>
    
                <div className="jumbotron">
                    <h1 className="display-4">UWUdemy</h1>
                    <p className="lead">Improving Lives Through Learning</p>
                    <hr className="my-4" />
                    <p>The leading global marketplace for learning and instruction</p>
                </div>
    
            </div>        
        );
    }    
}

export default About;
