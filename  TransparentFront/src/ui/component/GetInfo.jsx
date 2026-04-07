import {useEffect, useState} from "react";
import ProxyService from "../../service/ProxyService.jsx";

const GetInfo = () => {
    const [info, setInfo] = useState({});

    useEffect(()=>{
        (async () => {
            const data = await ProxyService.getInfo();
            setInfo(data);
        })()
    },[])

    return (
        <div className="container">
            <p> владелец - {info[0]?.toString() || ""}</p>
            <hr/>
            <p> число - {info[1]?.toString() || ""}</p>
            <hr/>
            <p> пауза активна? - {info[2]?.toString() || ""}</p>
        </div>
    )
}
export default GetInfo;