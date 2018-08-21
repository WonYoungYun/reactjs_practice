import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData:[{
                name:'A',
                phone:'010-0000-0001'
            }, {
                name:'B',
                phone: '010-0000-0002'
            },{
                name:'C',
                phone:'010-0000-0003'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick(key){
        this.setState({
            selectedKey:key
        });
        console.log(key);
    }
        render(){
      
            const mapToComponent = (data) => {
                data.sort((a,b) => { return a.name > b.name; });
                data = data.filter(
                    (contact) => {
                        return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >-1;
                    }
                )
              return data.map((contact, i) =>{
                return(<ContactInfo
                        contact={contact}
                        key={i}
                        onClick={()=>{this.handleClick(i)}}//컴포넌트에는 event 적용이 안됨 콜백형태로 함수전체 전달
                        />)
              });
            };
            
            return(
              <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponent(this.state.contactData)}</div>
                <ContactDetails isSelected={this.state.selectedKey !== -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                />
              </div>
            );
          }
}