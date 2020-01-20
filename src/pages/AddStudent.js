import React from "react";
import { getStudentList, addStudent } from "../lib/api";

// console.log(parseInt(this.state.studentKeys.length) + 1)

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: "",
            first_name: "",
            last_name: "",
            full_name: "",
            picture: "",
            born: "",
            father: "",
            mother: "",
            spouse: "",
            children: "",
            existing_magic_skills: "",
            desired_magic_skills: "",
            interested_in_course: "",
        };

    }

    handleFirstNameChange(event) {
        this.setState({ first_name: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }

    handleFullNameChange(event) {
        this.setState({ full_name: event.target.value });
    }

    handlePictureChange(event) {
        this.setState({ picture: event.target.value });
    }

    handleBornChange(event) {
        this.setState({ born: event.target.value });
    }

    handleFatherChange(event) {
        this.setState({ father: event.target.value });
    }

    
    handleMotherChange(event) {
        this.setState({ mother: event.target.value });
    }
    
    handleSpouseChange(event) {
        this.setState({ spouse: event.target.value });
    }
    
    handleChildrenChange(event) {
        this.setState({ children: event.target.value });
    }
    
    handleExistingSkillChange(event) {
        this.setState({ existing_magic_skills: event.target.value });
    }
    
    handleDesiredSkillsChange(event) {
        this.setState({ desired_magic_skills: event.target.value });
    }
    
    handleInterestedCourseChange(event) {
        this.setState({ interested_in_course: event.target.value });
    }


    handleSubmit(event) {
        alert('A new Student was submitted: ' + this.state.full_name);
        console.log(this.state)
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>Add New Student</h1>
                <form action="/addstudent" method="POST">
                    <div className="personalFirst">
                        <h3>First Name: </h3> <br />
                        <input type="text" name="first_name" value={this.state.first_name} onChange={(event) => this.handleFirstNameChange(event)} /><br />
                        <h3>Last Name: </h3> <br />
                        <input type="text" name="last_name" value={this.state.last_name} onChange={(event) => this.handleLastNameChange(event)} /><br />
                    </div>
                    <hr />
                    <div className="inputBoxSecond">
                        <div className="personalSecond">
                            <h3>Full Name: </h3><input placeholder=" Please Enter Full Name" type="text" name="full_name" value={this.state.full_name} onChange={(event) => this.handleFullNameChange(event)} /><br />
                            <h3>Picture Link: </h3><input placeholder=" Please Enter Picture Link" type="text" name="picture" value={this.state.picture} onChange={(event) => this.handlePictureChange(event)} /><br />
                            <h3>Birth Date: </h3><input placeholder=" Please Enter Day/Month/Year" type="date " name="born" value={this.state.born} onChange={(event) => this.handleBornChange(event)} /><br />
                        </div>
                        <div className="familyInput">
                            <h3>Father: </h3><input placeholder=" Please Enter Father's Name" type="text" name="father" value={this.state.father} onChange={(event) => this.handleFatherChange(event)} /><br />
                            <h3>Mother: </h3><input placeholder=" Please Enter Mother's Name" type="text" name="mother" value={this.state.mother} onChange={(event) => this.handleMotherChange(event)}/><br  />
                            <h3>Spouse: </h3><input placeholder=" Please Enter Spouse's Name" type="text" name="spouse" value={this.state.spouse} onChange={(event) => this.handleSpouseChange(event)}/><br  />
                            <h3>Children: </h3><input placeholder=" Please Enter Children's Names" type="text" name="children" value={this.state.children} onChange={(event) => this.handleChildrenChange(event)} /><br />
                        </div>
                        <div className="magicInput">
                            <h3>Existing Magic Skills: </h3><input placeholder=" Please Enter Existing Magic Skills" type="text" name="existing_magic_skills" value={this.state.existing_magic_skills} onChange={(event) => this.handleExistingSkillChange(event)} /><br />
                            <h3>Desired Magic Skills: </h3><input placeholder=" Please Enter Desired Magic Skills" type="text" name="desired_magic_skills" value={this.state.desired_magic_skills} onChange={(event) => this.handleDesiredSkillsChange(event)} /><br />
                            <h3>Desired Courses: </h3><input placeholder=" Please Enter Desired Courses" type="text" name="interested_in_course" value={this.state.interested_in_course} onChange={(event) => this.handleInterestedCourseChange(event)} /><br />
                        </div>
                    </div>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>

            </div>
        )
    }
}

export default AddStudent