import React,{useState} from 'react';
import '.././scss/upload.scss';
import UploadArea from './uploadArea';
import { Button,Progress } from 'reactstrap';

function Upload() {
  const [cvs, setCvs] = useState(0);
  const [maxCvs, setMaxCvs] = useState(15);
  console.log(cvs/maxCvs);
  return (
    <div className="MainContainer">

    <div className="uploadContainer">
<span><p>Upload Resumes</p></span>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
<div className="form">
<UploadArea cvs={cvs} maxCvs={maxCvs} handleCvs={setCvs}/>
<div className="bot">
<p>Note:You can upload maximum {maxCvs} resumes.</p>
<Button >Upload CV</Button>

 </div>
</div>

<div className=" bottomSide">
<div  className="row"> <p style={{marginRight: '5px',}}>{maxCvs-cvs}</p><p>Resume Balance</p> </div>
<div  className="row"> <p style={{marginRight: '5px',}}>{cvs}</p><p>Resume Uploaded</p> </div>

</div>

<Progress value={cvs/maxCvs*100} />
    </div>
    </div>
  );
}

export default Upload;
