import React from "react";
import { getStudentList } from "../lib/api";



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: null,
            studentKeys: []
        }
    }

    getStudent() {
        getStudentList().then(response => {
            
            this.setState({
                students: response.data,
                studentKeys: Object.keys(response.data)
                
            })
            console.log(parseInt(this.state.studentKeys.length) + 1)
        });

    };

    componentDidMount() {
        this.getStudent();
        
    }

    render() {

        return (

            <div className="studentProfileDisplayBox">

                {this.state.studentKeys.filter(student => this.state.students[student].student_id == this.props.match.params["id"]).map((array) =>

                    <div key={this.state.students[array].student_id}>
                        <h1 className="studentsHeader"> {this.state.students[array].first_name} {this.state.students[array].last_name} </h1>
                        <div className="studentProfileDisplay">
                            <img className="profilePicture" src={this.state.students[array].picture} alt={this.state.students[array].student_id} />
                            <div className="familyDisplay">
                                <h2>Full Name: {this.state.students[array].full_name}</h2>
                                <h3>Born: {this.state.students[array].born}</h3>
                                <h3>Mother: {this.state.students[array].mother}</h3>
                                <h3>Father: {this.state.students[array].father}</h3>
                                <h3>Spouse: {this.state.students[array].spouse}</h3>
                                <h3>Children: {this.state.students[array].children}</h3>
                            </div>
                        </div>
                        <div>
                            <h3>Profile Creation Time: {this.state.students[array].creation_time}</h3>
                            <h3>Last Update Time: {this.state.students[array].last_update_time}</h3>
                            <h3>Existing Magic Skills: {this.state.students[array].existing_magic_skills}</h3>
                            <h3>Desired Magic Skills: {this.state.students[array].desired_magic_skills}</h3>
                            <h3>Interested in Courses: {this.state.students[array].interested_in_course}</h3>
                        </div>

                    </div>
                )}

            </div>

        )
    }


}

export default Profile