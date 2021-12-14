import React from 'react';
import axios from 'axios';

const AxiosCource = () => {

    // useEffect(()=>{
    //     axios({
    //         method:'get',
    //         url:'https://jsonplaceholder.typicode.com/posts',
    //         params: {
    //             _limit: 7,
    //         }
    //     }).then(res => console.log('res', res))
    //         .catch(err => err.message);
    // },[]);

    const getPostsFunc = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => console.log('res', res))
            .catch(err => console.log('err', err));
    };

    axios.interceptors.request.use(config => {
        config.headers = {...config.headers, auth:'AuthToken'};
        return config;
    }, err => {
        return Promise.reject(err);
    });

    return (
        <div>
            <h1>Axios learning</h1>
            <button onClick={getPostsFunc}>Click</button>
        </div>
    )
}

export default AxiosCource;