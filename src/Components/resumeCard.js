import React, { Component } from 'react'
import '.././scss/resumeCard.scss';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck,faUser,faEnvelope,faGraduationCap,faMapMarkerAlt,faUserCircle,faChartLine,faQuestion } from '@fortawesome/free-solid-svg-icons'
class ResumeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: true,};

  }
  handleClick=() =>{
      this.setState({
        val: !this.state.val
      });
    }
  render() {
    return (
      <div className="resumeCard">
      <div className="icon"><FontAwesomeIcon icon={faUserCircle} size="2x"  /></div>
      <div className="resumeInfo">
         <Container className="name" ><p>{this.props.Name}</p></Container>
         <Container className="themed-container row"><FontAwesomeIcon style={{color: '#1855BF',marginRight:'15px'}}icon={faMapMarkerAlt} /><p>{this.props.Location}</p></Container>
         <Container className="themed-container row " ><FontAwesomeIcon style={{color: '#1855BF',marginRight:'15px'}} icon={faUser} /><p>{this.props.Job} <span style={{fontWeight: '600',marginLeft:'10px'}}>{this.props.WorkExp}</span></p> </Container>
         <Container className="themed-container row" >
         <div className={this.state.val
            ? "expander"
            : "expanded"} onClick={this.handleClick}>
          {
            this.state.val
              ? ('+2 More')
              : ( 'Show less')
          }
          </div>
          </Container>
          {!this.state.val && <>
         <Container className="themed-container row" ><FontAwesomeIcon style={{color: '#1855BF',marginRight:'15px'}} icon={faChartLine} /><p>{this.props.Careerlvl}</p></Container>
         <Container className="themed-container row" ><FontAwesomeIcon  style={{color: '#1855BF',marginRight:'15px'}} icon={faQuestion} /><p>Another Information</p></Container>
         </>}
         <Container className="themed-container row" ><FontAwesomeIcon style={{color: '#1855BF',marginRight:'15px'}} icon={faGraduationCap} /><p>{this.props.University}<span style={{fontWeight: '600',marginLeft:'10px'}}>{this.props.StdDuration}</span></p></Container>
         <Container className="themed-container row" ><FontAwesomeIcon  style={{color: '#1855BF',marginRight:'15px'}} icon={faEnvelope} /><p>{this.props.Email}</p></Container>
         <Container className="themed-container row "  ><p className="block">{this.props.Keywords.map(item=><p>{item}</p>)}</p></Container>
       </div>
       <div className="iconContainer"> <FontAwesomeIcon style={{color: 'green',}} icon={faUserCheck} /></div>
       </div>

    )
  }
}

export default ResumeCard
