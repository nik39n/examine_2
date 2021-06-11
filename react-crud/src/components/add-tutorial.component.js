import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangemanufacturer = this.onChangemanufacturer.bind(this);
    this.onChangemodel = this.onChangemodel.bind(this);
    this.onChangeyear = this.onChangeyear.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);


    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      manufacturer: "",
      model: "",
      year: "",
      price: "",

      published: false,

      submitted: false
    };
  }

  onChangemanufacturer(e) {
    this.setState({
      manufacturer: e.target.value
    });
  }
  onChangemodel(e) {
    this.setState({
      model: e.target.value
    });
  }
  onChangeyear(e) {
    this.setState({
      year: e.target.value
    });
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value
    });
  }


  saveTutorial() {
    var data = {
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      year: this.state.year,
      price: this.state.price

    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          manufacturer: response.data.manufacturer,
          model: response.data.model,
          year: response.data.year,
          price: response.data.price,

         published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      manufacturer: "",
      model: "",
      year: "",
      price: "",

      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">manufacturer</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.manufacturer}
                onChange={this.onChangemanufacturer}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">model</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.model}
                onChange={this.onChangemodel}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">year</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.year}
                onChange={this.onChangeyear}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">price</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.price}
                onChange={this.onChangeprice}
                name="title"
              />
            </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
