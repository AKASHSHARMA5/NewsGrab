/*
import React, { Component } from 'react'

export class Newsitem extends Component {
    render(){
      let {title,description,imageUrl,url,author,date,source}=this.props;
     return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {source}
          <span className="visually-hidden"></span>
        </span>
           <img src={imageUrl? imageUrl:"https://c.ndtvimg.com/2023-04/e3q8kptc_rahul-gandhi-leaves-bungalow_625x300_22_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400"} className="card-img-top" alt="img"/>
           <div className="card-body">
               <h5 className="card-title">{title}
               <span className="badge badge-pill badge-success">Latest</span>
                </h5>
               <p className="card-text">{description}</p>
               <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toUTCString()} </small></p>
               <a href={url} target='_main' className="btn btn-sm btn-dark">Read more</a>
           </div>
       </div>
      </div>
    )
    }
  
}

export default Newsitem
*/
//we can change our Newsitems which is a class based component into a function based component because function based component is easier than class based component

import React from 'react'

const Newsitem =(props)=> {
    
      let {title,description,imageUrl,url,author,date,source}=props;
     return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {source}
          <span className="visually-hidden"></span>
        </span>
           <img src={imageUrl? imageUrl:"https://c.ndtvimg.com/2023-04/e3q8kptc_rahul-gandhi-leaves-bungalow_625x300_22_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400"} className="card-img-top" alt="img"/>
           <div className="card-body">
               <h5 className="card-title">{title}
               <span className="badge badge-pill badge-success">Latest</span>
                </h5>
               <p className="card-text">{description}</p>
               <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toUTCString()} </small></p>
               <a href={url} target='_main' className="btn btn-sm btn-dark">Read more</a>
           </div>
       </div>
      </div>
    )
    
  
}

export default Newsitem