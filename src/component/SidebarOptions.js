import { Add } from '@material-ui/icons';
import React from 'react'
import '../css/SidebarOptions.css';
import exam from '../images/exam.jpg'
import preexam from '../images/preexam.jpg'
import placement from '../images/placement.jpg'
import ml from '../images/ml.jpg'
import webd from '../images/webd.jpg'


function SidebarOptions(){
    return(
        <div className = "sidebarOptions">
            <div className = "sidebarOption">
                <img 
                    src={preexam}
                    alt=""
                />
                <p>Previous Year Question Paper</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src={exam}
                    alt=""
                />
                <p>Exam Pattern</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src={webd}

                    alt=""
                />
                <p>Pharmacy</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src={ml}
                    alt=""
                />
                <p>English</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Agriculture</p>
            </div>
            
            <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Computer Science</p>
                </div>
            
                <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Civil Engineering</p>
                </div>

                <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Electrical and Electronics Engineering</p>
               </div>

               <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Management</p>
               </div>

               <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Civil Engineering</p>
               </div>

               <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Mechanical Engineering</p>
               </div>

               <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Coding Enthusiast</p>
               </div>

               <div className = "sidebarOption">
                <img 
                    src={placement}
                    alt=""
                />
                <p>Placement Preparation</p>
               </div>

               <div className="sidebarOption">
                   <Add/>
                   <p className ="text">Discover Spaces</p>
               </div>
              
            
        {/* </div> */}
        </div>
  );
}

export default SidebarOptions;