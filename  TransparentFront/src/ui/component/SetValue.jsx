import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useContext} from "react";
import {AtlantContext} from "../../core/context.jsx";
import ProxyService from "../../service/ProxyService.jsx";

const SetValue = () => {

    const {wallet} = useContext(AtlantContext)

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const amount = e.target[0].value;
            await  ProxyService.setValue(amount, wallet);
            alert("значение присвоенно")
        } catch {
            alert("не получилось присвоить значениек")
        }


    }

    return (
        <Form className="container" onSubmit={handleSubmit}>
            <h2> присвоить значение числу</h2>
            <FormGroup className="mb-3">
                <FormLabel htmlFor="add" column={1}> число</FormLabel>
                <FormControl type="number" min={0} placeholder="100"/>
            </FormGroup>
            <Button type="submit"> присвоить </Button>
        </Form>
    )
}

export default SetValue;