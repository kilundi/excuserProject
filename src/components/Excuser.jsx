import React, { useState, useEffect } from 'react'
import Axios from "axios";
import ExcuserButton from './ExcuserButton';
import ExcuserCard from './ExcuserCard';

//https://excuser-three.vercel.app/v1/excuse/family/

const Excuser = () => {
    // const [excuse, setExcuse] = useState("");
    const [data, setData] = useState([]);
    const [excuse, setExcuse] = useState("developers");

    const fetchExcuse = (excuseParam) => {
        const url = `https://excuser-three.vercel.app/v1/excuse/${excuseParam}/`;
        Axios.get(url).then(res => setData(res.data));
    }

    useEffect(() => {
        fetchExcuse(excuse);
    }, [excuse]);

    return (
        <div>
            <div className=' flex flex-col gap-4 justify-center mt-6' >

                <div className=' flex gap-4 justify-center ' >
                    <ExcuserButton name="Developer" handleClick={ () => setExcuse("developers") } />
                    <ExcuserButton name="College" handleClick={ () => setExcuse("college") } />
                    <ExcuserButton name="Family" handleClick={ () => setExcuse("family") } />
                </div>
                <div className=' flex gap-4 justify-center ' >
                    <ExcuserButton name="Office" handleClick={ () => setExcuse("office") } />
                    <ExcuserButton name="Children" handleClick={ () => setExcuse("children") } />
                    <ExcuserButton name="Party" handleClick={ () => setExcuse("party") } />
                </div>
                <div className=' flex gap-4 justify-center ' >
                    <ExcuserButton name="Funny" handleClick={ () => setExcuse("funny") } />
                    <ExcuserButton name="Unbelievable" handleClick={ () => setExcuse("unbelievable") } />
                    <ExcuserButton name="Gaming" handleClick={ () => setExcuse("gaming") } />
                </div>
            </div>
            <div className='  mt-6 flex justify-center' >
                <ExcuserCard data={ data } />
                {/* { data.length > 0 && <h1>{ data[0].category }</h1> }
                { data.length > 0 && <h1>{ data[0].excuse }</h1> } */}
            </div>
        </div>
    )
}

export default Excuser