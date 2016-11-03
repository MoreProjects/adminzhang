import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                <section>
                  {this.props.children || 'Welcome to React kick off'}
                </section>
            </div>
        );
    },
});
