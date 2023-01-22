import React from 'react'
import { Outlet } from 'react-router-dom';
import Layout from '../Components/Layout';


const Posts = () =>{
     
    return(
        <Layout >   
            <h1>Posts Page</h1> 
            <Outlet />
        </Layout>
    )
}



export default Posts;