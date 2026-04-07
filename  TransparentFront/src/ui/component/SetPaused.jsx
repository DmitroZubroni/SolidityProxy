import {Button, Form, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useContext} from "react";
import {AtlantContext} from "../../core/context.jsx";
import ProxyService from "../../service/ProxyService.jsx";

const SetPaused = () => {

    const {wallet} = useContext(AtlantContext)

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const paused = e.target[0].checked;
            await  ProxyService.setPaused(paused, wallet);
            alert("получислось изменить статус паузы")
        } catch {
            alert("не получислось изменить статус паузы")
        }


    }

    return (
        <Form className="container" onSubmit={handleSubmit}>
            <h2>изменить статус паузы</h2>
            <FormGroup className="mb-3">
                <FormLabel htmlFor="add" column={1}>true or false</FormLabel>
                <FormCheck type="switch"/>
            </FormGroup>
            <Button type="submit"> указать </Button>
        </Form>
    )
}

export default SetPaused;