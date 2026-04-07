import Header from "../component/Header.jsx";
import Add from "../component/Add.jsx";
import SetPaused from "../component/SetPaused.jsx";
import SetValue from "../component/SetValue.jsx";
import Sub from "../component/Sub.jsx";
import {useContext} from "react";
import {AtlantContext} from "../../core/context.jsx";
import {Button} from "react-bootstrap";

const Functions = () => {

    const {wallet, login} = useContext(AtlantContext
    )
    return (
        <div>
            <Header />
            {
                !wallet  ?
                    <Button className="container" onClick={login} >авторизоваться</Button> :
                    <>
                        <Add/>
                        <SetPaused/>
                        <SetValue/>
                        <Sub/>
                    </>
            }

        </div>
    )
}
export default Functions;