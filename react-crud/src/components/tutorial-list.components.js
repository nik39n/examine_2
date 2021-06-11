import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";


export default class TutorialsList extends Component {

    state = {
        tutorials:[],

    }

    componentDidMount(){
        TutorialDataService.getAll()
        .then(response => {
            this.setState(
                {
                    tutorials: response.data
                }

            );
            console.log(response);
        })
        .catch(e=>{
            console.log(e)
        })

    }

    render() {
        return(
                <div className="list row">
                <div className="col-md-8">
                <div className="input-group mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                
                />
                <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    
                >
                    Search
                </button>
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <h4>Cars</h4>

            <ul className="list-group">
                {
                    this.state.tutorials.map((item ,index)=>{
                        return(
                            <li key={index}>
                                {item.manufacturer}
                            </li>
                        )
                    })
                }
            </ul>

            <button
                className="m-3 btn btn-sm btn-danger"
            
            >
                Remove All
            </button>
            </div>
            </div>
        )
    }
}