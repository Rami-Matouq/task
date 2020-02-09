import React, { Component } from 'react'
import '.././scss/resume.scss';
import ResumeCard from './resumeCard';
import Filter from './filter';



const DATA = [
   {
    name: "Rami Mato",
    location: "Hello darkness my old friend",
    job: "HR",
    workExp: "2007-2019",
    university: "Accounting",
    stdDuration: "2012-2019",
    email: "bb@11.com",
    keywords:["Marketing","Sales","HR","Planning","Analysis"],
careerlvl:"Middle",
  },
   {
    name: "Fareed Eid",
    location: "Hello darkness my old friend",
    job: "Front-end",
    workExp: "2010-Present",
    university: "Animation",
    stdDuration: "2012-2019",
    email: "bb@11.com",
    careerlvl:"Senior",
    keywords:["Photoshop","xD","blabla","qweqwe","123123"]

  },
   {
    name: "Sameer Saed",
    location: "this is just a test",
    job: "Back-end",
    workExp: "2012-Present",
    university: "Computer Engineering",
    stdDuration: "2011-2016",
    email: "e@3.com",
    careerlvl:"Junior ",
    keywords:["C++","Java","JS","Python","111111","111111","111111","111111"]
  }
]
class Resume extends Component {
  constructor(props) {
    super(props)
    this.state= {
      JobTitle: '',
      Major: '',
      Keyword: '',
      Careerlvl:'',
      sortName: false,
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSort = (data,sortName) => {
    console.log('sortName',sortName);
    if(sortName) {
      return data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
      return 0;
    })
    } else {
      return data.sort(function(a, b){
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
      return 0;
      })
    }

  }

  render() {
    console.log(this.state);
    return (
  <div className="ResumesMainCont">
<Filter isSortByName={this.state.sortName} sortName={(value)=>this.setState({sortName:value})} handleChange={this.handleChange}/>
      <div className="resumesContainer">
      <p>Uploaded CV's</p>
        {this.handleSort(DATA,this.state.sortName).map((item, index) =>{
          let SearchKeyword = new RegExp(`${this.state.Keyword}`);
          let SearchReg = new RegExp(`${this.state.JobTitle}`);
          let SearchMajor = new RegExp(`${this.state.Major}`);
          let SearchCareerLvl = new RegExp(`${this.state.Careerlvl}`);
          function KeyWords(list,item) {
            let Availability = list.map(item=>(
              SearchKeyword.test(item)
            ));
            return Availability.includes(true)
          }
            return (
              SearchReg.test(item.job) && SearchMajor.test(item.university) && KeyWords(item.keywords,this.state.Keyword) && SearchCareerLvl.test(item.careerlvl) &&<ResumeCard itemData={item} Name={item.name} Location={item.location} Job={item.job} University={item.university} WorkExp={item.workExp}  StdDuration={item.stdDuration} Email={item.email} Keywords={item.keywords}  Careerlvl={item.careerlvl} />)

          }
        )}

      </div>
  </div>


    )
  }
}

export default Resume
