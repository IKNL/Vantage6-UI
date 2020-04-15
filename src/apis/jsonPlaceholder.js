import axios from 'axios';
import { logIn } from '../actions';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODY4NzUwMDgsIm5iZiI6MTU4Njg3NTAwOCwianRpIjoiMTBjNjI0MjktYTJmMS00ZGI2LWJjNGYtOGQ2NTdlOTI2YTdmIiwiZXhwIjoxNTg2ODk2NjA4LCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsidHlwZSI6InVzZXIiLCJyb2xlcyI6WyJyb290Il19fQ.75K0fg5MV_Pk-87598DBkcmzdwGNQHj0d3vZ8_4Qyag";

export default axios.create({
    headers:{
        authorization: `Bearer ${token}`
    },
    baseURL: 'http://localhost:5000/api/'
})


