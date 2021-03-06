import React from "react";
import { getStudentList } from "../lib/api";
import { Link } from 'react-router-dom';


class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: null,
            studentKeys: []
        }
        // this.getStudentList = this.getStudentList.bind(this)
    }

    getStudent() {
        getStudentList().then(response => {
            this.setState({
                students: response.data,
                studentKeys: Object.keys(response.data)
            })
        });

    };

    componentDidMount() {
        this.getStudent();
    }

    render() {

        return (
            <div>
                <div className="addStudentButton">
                    <Link to="/addStudent"> Add New Student</Link>
                </div>
                <hr />
                <div className="studentsListDisplayBox">
                    {this.state.studentKeys.map(el =>

                        <div className="students" key={this.state.students[el].student_id}>


                            <Link to={`/profiles/${this.state.students[el].student_id}`} > {this.state.students[el].first_name} {this.state.students[el].last_name} </Link>

                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default Lists