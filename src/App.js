import React, { Component } from "react";
import Modal from "./component/modal";
import './App.css';
import {
  validateName,
  validateAddress,
  validateMobile,
  validateCity,
  validateStates,
  validateZip,
} from './component/validation';
class App extends Component {
  state = {
    checked: "",
    show: false,
    show_personal: false,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states: "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: "",
    personal: [
      {
        id:'1',
        name: "Sample",
        mobile: "12421412412",
        addrs: "a d f",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "2141242",
        type: "present",
      },
    ],
    business: [
      {
        id:'b1',
        name: "Cool",
        mobile: "421412412",
        addrs: "a d f",
        city: "ennai",
        states: "Tamil Nadu",
        zip: "2141242",
        type: "present",
      },
    ],
  };

  componentDidMount = () => {
    this.handleBorder();
  };
  
      handleClick=()=> {
        this.setState({ show: true });
      }

  onClose = () => {
    this.setState({ show_personal: true,show: false });
    this.setState({
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      states: "",
      zip: "",
      checked:"",
      type:"",
      name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: ""
    }); 
  };

  handleChange = (e) => {
    //console.log(this.state.name_error)
    switch(e.target.name){
      case 'name':
        const n = validateName(e.target.value);
        if(n){
          this.setState({name_error:n});
        }else{
          this.setState({name:e.target.value, name_error:""});
        }
       // validateName(e.target.value)?this.setState({name:e.target.value, name_error:""}):this.setState({name_error:"Please enter a value"});
        break;
      case 'mobile':
        const m = validateMobile(e.target.value);
        if(m){
          this.setState({mobile_error:m});
        }else{
          this.setState({mobile:e.target.value, mobile_error:""});
        }
        //validateMobile(e.target.value)?this.setState({mobile:e.target.value}):this.setState({mobile_error:"Please enter a value"});
        break;
      case 'states':
        validateStates(e.target.value)?this.setState({states_error:validateStates(e.target.value)}):this.setState({states:e.target.value,states_error:""})
        break;
      case 'addrs':
        validateAddress(e.target.value)?this.setState({addrs_error:validateAddress(e.target.value)}):this.setState({addrs:e.target.value,addrs_error:""});
        break;
      case 'zip':
        validateZip(e.target.value)?this.setState({zip_error:validateZip(e.target.value)}):this.setState({zip:e.target.value,zip_error:""});
        break;
      case 'city':
        validateCity(e.target.value)?this.setState({city_error:validateCity(e.target.value)}):this.setState({city:e.target.value,city_error:""});
        break;
      case 'type':
          this.setState({type:e.target.value})
          break;
      case 'checked':
          this.setState({checked:e.target.value})
          break;
      default:
        break;

    }
  };

  handleSave = () => {
         //console.log(this.state.checked);
    if (this.state.checked.toLowerCase() === "personal") {
      this.setState((prev) => ({
        personal: [
          ...prev.personal,
          {
            id:Math.random().toString(),
            name: this.state.name,
            mobile: this.state.mobile,
            addrs: this.state.addrs,
            city: this.state.city,
            states: this.state.states,
            zip: this.state.zip,
            type: this.state.type,
          },
        ],
      }));
      this.setState({ show_personal: true,show: false });
    } else if (this.state.checked.toLowerCase() === "business") {
      this.setState((prev) => ({
        business: [
          ...prev.business,
          {
            id:Math.random().toString(),
            name: this.state.name,
            mobile: this.state.mobile,
            addrs: this.state.addrs,
            city: this.state.city,
            states: this.state.states,
            zip: this.state.zip,
            type: this.state.type,
          },
        ],
      }));
      this.setState({ show_personal: false,show: false });
    }

    this.handleClear()
    //console.log(this.state.personal);
  };
  handleClear = () => {
    this.setState({
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      states: "",
      zip: "",
      checked:"",
      type:"",
      name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: ""
    });
  };

  handleBorder = () => {
    this.setState({
      borderBottom1: "hiddden",
      borderBottom: "3px solid rgb(71,68,206)",
      show_personal: true,
    });
  };
  handleBorder1 = () => {
    this.setState({
      borderBottom1: "hiddden",
      borderBottom: "3px solid rgb(71,68,206)",
      show_personal: false,
    });
  };
   
  render() {
    //console.log(this.state.show);
  return (     
  <div className="App">
      <header className="App-header">
        <h2>Address Book</h2>        
      </header>
      { this.state.show && (     
      <Modal>
      <div className="bg">
          <div className="pop">
                <h3>Fill Address Details</h3>
                <div className="close"  onClick={this.onClose}>X</div>
                <form>
                    <div className="radio">
                    <input type="radio" onChange={(e)=>this.handleChange(e)} value="Personal" name="checked"/><label>Personal</label>
                    <input type="radio" onChange={(e)=>this.handleChange(e)} value="Business" name="checked" /><label>Business</label>
                    </div>   
                    { 
                    this.state.checked !=="" &&(
                    <>
                      <div className="fields">
                    <label>Name</label>
                    <input type="text" className="input" onChange={(e)=>this.handleChange(e)} name="name" />  
                    <span>{this.state.name_error!==""?this.state.name_error:""}</span>
                    </div>
                    <div className="fields">
                    <label>Mobile</label>               
                    <input type="text" className="input" onChange={(e)=>this.handleChange(e)} name="mobile" />
                    <span>{this.state.mobile_error!==""?this.state.mobile_error:""}</span>
                    </div>
                    <div className="fields">
                    <label>Address</label>
                    <textarea onChange={(e)=>this.handleChange(e)} name="addrs"></textarea>
                    <span>{this.state.addrs_error!==""?this.state.addrs_error:""}</span>
                    </div>
                    <div className="fields">
                    <label>City</label>
                    <input type="text" className="input" onChange={(e)=>this.handleChange(e)} name="city" />
                    <span>{this.state.city_error!==""?this.state.city_error:""}</span>
                    </div>
                    <div className="fields">
                    <label>State</label>
                    <input type="text" className="input" onChange={(e)=>this.handleChange(e)} name="states"/>
                    <span>{this.state.states_error!==""?this.state.states_error:""}</span>
                    </div>
                    <div className="fields">
                    <label>Zip</label>               
                    <input type="text" className="input" onChange={(e)=>this.handleChange(e)} name="zip" />
                    <span>{this.state.zip_error!==""?this.state.zip_error:""}</span>
                    </div>

                    <div className="radio">
                    <input type="radio"  onChange={(e)=>this.handleChange(e)} value="Present" name="type"/>Present
                    <input type="radio" onChange={(e)=>this.handleChange(e)} value="Permanent" name="type" />Permanent
                    <input type="radio" onChange={(e)=>this.handleChange(e)} value="Both" name="type" />Both
                    </div>
                    <div className="btns">
                    <input type="button" onClick={this.handleSave} className="save" value="save" name="save"/>
                    <input type="button" onClick={this.handleClear} className="clear" value="clear" name="clear"/>
                    </div>
                  </>
                    )
                    }        
                    
                </form>
            </div>
      </div>
      </Modal>
       ) }
      <button className='add' onClick={this.handleClick}>Add</button>
      



      <table>
        <tbody>
          <tr key="id2" className="buttons">
            <th onClick={()=>{this.setState({ show_personal: true })}}>Personal</th>
            <th onClick={()=>{this.setState({ show_personal: false })}}>Business</th>
          </tr>
          
          {               
            this.state.show_personal ?
            this.state.personal.length !== 0?  
              <tr key="id3" >
              <td>Name</td>
              <td>Mobile No.</td>
              <td>Address</td>
              <td>City</td>
              <td>States</td>
              <td>Zip</td>
              <td>pesent/perment Address</td>
            </tr>  : "" : 
            this.state.business.length !== 0?
            <tr key="id3" >
            <td>Name</td>
            <td>Mobile No.</td>
            <td>Address</td>
            <td>City</td>
            <td>States</td>
            <td>Zip</td>
            <td>pesent/perment Address</td>
          </tr>:""
          }
        
          
            {               
              this.state.show_personal ?
              (this.state.personal.length !== 0?  
              this.state.personal.map((value,index)=>{
                return (
                  <tr key="id4" >
                  <td >{value.name}</td>
                  <td >{value.mobile}</td>
                  <td >{value.addrss}</td>
                  <td >{value.city}</td>
                  <td >{value.states}</td>                  
                  <td >{value.zip}</td>
                  <td >{value.type}</td>
                  </tr>
                ) 
              }): <h3>No personal records to display</h3> ): 
             ( this.state.business.length !== 0?
              this.state.business.map((value,index)=>{
                return (
                  <tr key="id4" >
                  <td >{value.name}</td>
                  <td >{value.mobile}</td>
                  <td >{value.addrss}</td>
                  <td >{value.city}</td>
                  <td >{value.states}</td>                  
                  <td >{value.zip}</td>
                  <td >{value.type}</td>
                  </tr>
                )
              }):<h3>No business records to display</h3>)
            }
            
        </tbody>
      </table>
    </div>
    );

  }
}
export default App;
