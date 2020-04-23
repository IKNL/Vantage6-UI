import axios from 'axios';
import { connect } from 'react-redux';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODc2MjU3MzgsIm5iZiI6MTU4NzYyNTczOCwianRpIjoiMDJlMGM1MzktMWYwYS00MWNjLWI3YjctNTUzOGRmYjI3YzNjIiwiZXhwIjoxNTg3NjQ3MzM4LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsidHlwZSI6InVzZXIiLCJyb2xlcyI6WyJyb290Il19fQ.e_yze4GMpQHcyX39BBHcS9dY1aIk6-M_1XrfAFecvZc"
// const updateToken = ({token}) => {

//     return ({
//         authorization: `Bearer ${token}`
//     })
// }

export default axios.create({
    headers: {
        authorization: `Bearer ${token}`
    },
    baseURL: 'http://localhost:5000/api/'
});

// const mapStateToProps = (state) => {
//     return { token: state.token };
// }

// connect(mapStateToProps)(updateToken)
