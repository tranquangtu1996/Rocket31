import React, { Component } from 'react'

export default class EmployeeView extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    const personList = this.props.employees.map((employee => 
        
        <li key={employee.id}>{employee.name}</li>
    ));
    return <ul>{personList}</ul>;
  }
}
