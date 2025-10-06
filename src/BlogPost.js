import React from 'react';
import { Routes, Route, useParams} from 'react-router-dom';

function BlogPost ()  {
    let { id } = useParams();
    return (
        <div style={{fontSize:"50px"}}>
            Now showing post {id}
        </div>
    );
};
function Home() {
    return <h3>Home page</h3>;   

}
function Param() {
    return (
        <Routes>
            <Route path="/page/:id" element={<BlogPost />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
} 
export default Param;