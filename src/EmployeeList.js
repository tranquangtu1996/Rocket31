import React, { Component } from 'react'
import { axiosClient } from './api/api';
import { getEmployee } from './api/employee';
import WithLoading from './api/WithLoading';
import EmployeeView from './api/EmployeeView';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[],
        };
    }

    getListEmployee = () => {
        getEmployee()
        .then((response) => {
            this.setState({
                employees: response.data,
            });
        })
        .catch((err) => console.log(err));
    };

    componentDidMount(){
        this.getListEmployee();
    } 
  render() {
    const EmployeeListWithLoading = WithLoading(EmployeeView);
    return (
        <EmployeeListWithLoading
        isLoading={this.state.employees.length ===0}
        employees={this.state.employees}
        />
    );
  }

}
