import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useContext} from "react";
import {AtlantContext} from "../../core/context.jsx";
import ProxyService from "../../service/ProxyService.jsx";

const Sub = () => {

    const {wallet} = useContext(AtlantContext)

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const amount = e.target[0].value;
            await  ProxyService.sub(amount, wallet);
            alert("вы вычли число")
        } catch {
            alert("не получилось вычесть число")
        }


    }

    return (
        <Form className="container" onSubmit={handleSubmit}>
            <h2> вычесть число</h2>
            <FormGroup className="mb-3">
                <FormLabel htmlFor="add" column={1}> число</FormLabel>
                <FormControl type="number" min={0} placeholder="100"/>
            </FormGroup>
            <Button type="submit"> вычесть </Button>
        </Form>
    )
}

export default Sub;