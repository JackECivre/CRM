import axios from "axios";

const baseUrl = "http://localhost:7001/";

export function getStudentList(){
    return axios.get(`${baseUrl}list`)
}

export function addStudent(student){
    return axios.post(`${baseUrl}addstudent`, student)
}