import json
import random
from flask import Flask, request
from flask_cors import CORS, cross_origin
import datetime
import time
import logging


students = {
    "1":
        {"student_id": "HarryPotter",
            "first_name": "Harry",
            "last_name": "Potter",
            "picture": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg",
            "full_name": "Harry James Potter",
            "father": "James Potter",
            "mother": "Lily Potter",
            "spouse": "Ginny Weasley",
            "children":	"James S. Potter, Albus S. Potter, Lily L. Potter",
            "born":	"31 July 1980",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],

         },

    "2":
        {
            "student_id": "HermioneGranger",
            "first_name": "Hermione",
            "last_name": "Granger",
            "picture": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg",
            "full_name": "Hermione Jean Granger",
            "father": "Unknown Granger",
            "mother": "Unknown Granger",
            "spouse": "Ron Weasley",
            "children":	"Rose Granger-Weasley, Hugo Granger-Weasley",
            "born":	"19 September 1979",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],
        },
    "3":
        {"student_id": "RonWeasley",
            "first_name": "Ron",
            "last_name": "Weasley",
            "picture": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg",
            "full_name": "Ronald Bilius Weasley",
            "father": "Arthur Weasley",
            "mother": "Molly Weasley",
            "spouse": "Hermione Granger",
            "children":	"Rose Granger-Weasley, Hugo Granger-Weasley",
            "born":	"1 March 1980",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],
         },
    "4":
        {"student_id": "HarryPlopper",
            "first_name": "Harry",
            "last_name": "Plopper",
            "picture": "https://i.pinimg.com/originals/dc/db/b7/dcdbb7dc7573df5725d66e5da61ec026.jpg",
            "full_name": "Spider Plopper Pig",
            "father": "Bacon",
            "mother": "Ribs",
            "spouse": "None",
            "children":	"None",
            "born":	"26 July 2007",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],
         },
    "5":
        {"student_id": "AlbusDumbledore",
            "first_name": "Albus",
            "last_name": "Dumbledore",
            "picture": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Dumbledore_and_Elder_Wand.JPG/220px-Dumbledore_and_Elder_Wand.JPG",
            "full_name": "Albus Percival Wulfric Brian Dumbledore",
            "father": "	Percival Dumbledore",
            "mother": "Kendra Dumbledore",
            "spouse": "None",
            "children":	"None",
            "born":	"1881",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],
         },
    "6":
        {"student_id": "RubeusHagrid",
            "first_name": "Rubeus",
            "last_name": "Hagrid",
            "picture": "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/RubeusHagrid.jpg/220px-RubeusHagrid.jpg",
            "full_name": "Rubeus Hagrid",
            "father": "Unknown",
            "mother": "Fridwulfa ",
            "spouse": "None",
            "children":	"None",
            "born":	"6 December 1928",
            "creation_time": "",
            "last_update_time": "",
            "existing_magic_skills": [""],
            "desired_magic_skills": [""],
            "interested_in_course": [""],
         },
}

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

logging.getLogger('flask_cors').level = logging.DEBUG

@app.route("/list", methods=["GET"])
@cross_origin()
def get_student_list():
    return json.dumps(students)


@app.route("/profiles/<path:key>", methods=["GET"])
@cross_origin()
def get_student_profile(key):
    return students[key]


@app.route("/addstudent", methods=["POST"])
@cross_origin()
def add_student():
    global students
    received_data = request.get_json()
    new_student_key = []
    for key in received_data.keys():
        new_student_key.append(key)
    student_key = len(list(students.keys()))
    new_student_key = student_key + 1
    students[new_student_key] = received_data
    return received_data



# @app.route("/dashboard")
# @cross_origin()
# def get_statistics():


if __name__ == "__main__":
    app.run(host="localhost", port=7001, debug=True)
