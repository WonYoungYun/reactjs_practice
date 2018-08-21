import React from 'react';

export default class ContactDetails extends React.Component{
    render(){
        const details =(
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const blank =(<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details : blank}
            </div>/*isSelected  라는 props가 true면 details 반환 false 면 blank 반환*/
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
};