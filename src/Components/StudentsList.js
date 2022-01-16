import React from 'react'
import Student from './Student'

function StudentsList({deleteStudent, list}) {
    const listOfStudents = list.map((student) =>
        <Student student={student}  deleteStudent={deleteStudent} />)
    return (
        <div>
            {listOfStudents}
        </div>
    )
}

export default StudentsList
