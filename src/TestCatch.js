import {useState, useEffect} from 'react';
import axios from 'axios';


const TestCatch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    if(error) return <p>Error:{error}</p>;
    if(!data) return <p>Loading...</p>;
    return <div>{JSON.stringify(data)}</div>;
};

export default TestCatch;

