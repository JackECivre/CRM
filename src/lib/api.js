import axios from "axios";

const baseUrl = "http://127.0.0.1:7000/";

export function getStudentList(){
    return axios.get(`${baseUrl}list`)
}

export function addStudent(student){
    return axios.post(`${baseUrl}addstudent`, student)
}