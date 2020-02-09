import React, { Component } from 'react'
import '.././scss/filter.scss';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faStream,faClone,faBriefcase} from '@fortawesome/free-solid-svg-icons'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }


  render() {
    console.log(this.state);
    return (
  <div className="FilterContainer">
  <div className="heading">
<p>Filters</p>
  </div>
  <UncontrolledDropdown setActiveFromChild>
           <DropdownToggle tag="a" className="nav-link" caret>
             <span>   <FontAwesomeIcon style={{color:"#1855BF" ,marginRight:'15px'}} icon={faStream}/> Sort By</span>
           </DropdownToggle>
           <DropdownMenu style={{width:"100%"}} >
             <DropdownItem  onClick={()=>this.props.sortName(!this.props.isSortByName)}>Name</DropdownItem>
           </DropdownMenu>
         </UncontrolledDropdown>
  <UncontrolledDropdown setActiveFromChild>
           <DropdownToggle tag="a" className="nav-link" caret>
             <span>   <FontAwesomeIcon style={{color:"#1855BF" ,marginRight:'15px'}} icon={faClone} />Match CV's</span>
           </DropdownToggle>
           <DropdownMenu style={{width:"100%"}} >
             <DropdownItem >Category</DropdownItem>
           </DropdownMenu>
         </UncontrolledDropdown>
  <UncontrolledDropdown setActiveFromChild>
           <DropdownToggle tag="a" className="nav-link" caret>
             <span>   <FontAwesomeIcon style={{color:"#1855BF" ,marginRight:'15px'}} icon={faBriefcase}   />Experience</span>
           </DropdownToggle>
           <DropdownMenu style={{width:"100%"}} >
             <DropdownItem >Category</DropdownItem>
           </DropdownMenu>
         </UncontrolledDropdown>
         <div className="search">
         <FontAwesomeIcon className="SearchIcon" icon={faSearch}   />
                   <input type="text" className="searchText" placeholder="Search By Keyword"  name="Keyword" onChange={this.props.handleChange}/></div>

                   <div className="search" >
          <FontAwesomeIcon className="SearchIcon" icon={faSearch}   />
                   <input type="text" className="searchText" placeholder="Search By Job Title" name="JobTitle" onChange={this.props.handleChange}/></div>
         <div className="search" >
          <FontAwesomeIcon className="SearchIcon" icon={faSearch}   />
                   <input type="text" className="searchText" placeholder="Search By Major"  name="Major"  onChange={this.props.handleChange} /></div>
         <div className="search" >
          <FontAwesomeIcon className="SearchIcon" icon={faSearch}   />
                   <input type="text" className="searchText" placeholder="Search By Career Level" name="Careerlvl"  onChange={this.props.handleChange}/></div>
  </div>


    )
  }
}

export default Filter
