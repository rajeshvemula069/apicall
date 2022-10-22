import React from 'react'
import Layout from '../components/Layout'

function PreviousAddress() {
    return (
        <Layout>
           <div className="container">
            <div className="row">
               <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                  <h1>Hi <span>First Name</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
               </div>
               <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                  <div className="formpart">
                     <form action="">
                        <div id="slide03" style={{"display": "block"}}>
                           <h3>Do you have a Previous Address?</h3>
                           <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label next02" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label tothank" for="flexRadioDefault2">
                              No
                            </label>
                          </div>
                        </div>
                        
                        
                        
                        
                         {/* <div id="slide04" style={{"display": "block"}}>
                           <h3>Enter your Previous Address</h3>
                            <div className="mb-3 text-start">
                                <label className="form-label">Previous Address 1</label>
                                <input type="text" className="form-control mb-3" id="" placeholder="Address line 1"/>
                                <input type="text" className="form-control mb-3" id="" placeholder="Address line 2"/>
                                <input type="text" className="form-control mb-3" id="" placeholder="Address line 3"/>
                            </div>
                            
                            <div className="mb-3 text-center" id="submitoradd01">
                                <button type="button" className="btn btn-success tothank">Submit</button>
                                <p><a href="#postaddrs2" id="showadrs2">Add Another Address</a></p>
                                <p><a href="#postaddrs2" id="back02"> Back</a></p>
                            </div>   */}

{/* 
                             <div id="postaddrs2"  style={{"display": "block"}}>
                                <div className="mb-3 text-start">
                                    <label for="" className="form-label">Previous Address 2</label>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 1"/>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 2"/>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 3"/>
                                </div>
                            
                                <div className="mb-3 text-center" id="submitoradd02">
                                    <button type="button" className="btn btn-success tothank">Submit</button>
                                    <p><a href="#postaddrs3" id="showadrs3">Add Another Address</a></p>
                                    <p><a href="#slide04" id="remove3">Remove Address</a></p>
                                </div> 
                            </div>


                            <div id="postaddrs3"  style={{"display": "block"}}>
                                <div className="mb-3 text-start">
                                    <label for="" className="form-label">Previous Address 3</label>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 1"/>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 2"/>
                                    <input type="text" className="form-control mb-3" id="" placeholder="Address line 3"/>
                                </div>  */}
    
                                <div className="mb-3 text-center">
                                    <button type="button" className="btn btn-success tothank">Submit</button>
                                    <p><a href="#slide04" id="remove4">Remove Address</a></p>
                                </div> 
                            </div>


                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
        </Layout>
    )
}

export default PreviousAddress