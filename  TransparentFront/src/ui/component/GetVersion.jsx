import {useEffect, useState} from "react";
import ProxyService from "../../service/ProxyService.jsx";

const GetInfo = () => {
    const [info, setInfo] = useState({});

    useEffect(()=>{
        (async () => {
            const data = await ProxyService.version();
            setInfo(data);
            console.log(data);
        })()
    },[])

    return (
        <div className="container">
            <h2>версия</h2>
            <p> владелец - {info?.toString() || ""}</p>
        </div>
    )
}
export default GetInfo;