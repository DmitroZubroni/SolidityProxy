import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useContext} from "react";
import {AtlantContext} from "../../core/context.jsx";
import ProxyService from "../../service/ProxyService.jsx";

const Add = () => {

    const {wallet} = useContext(AtlantContext)

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const amount = e.target[0].value;
            await  ProxyService.add(amount, wallet);
            alert("число прибавлено")
        } catch {
            alert("не получилось прибавить число")
        }


    }

    return (
        <Form className="container" onSubmit={handleSubmit}>
            <h2> прибавить число</h2>
            <FormGroup className="mb-3">
                <FormLabel htmlFor="add" column={1}> количество</FormLabel>
                <FormControl type="number" min={0} placeholder="100"/>
            </FormGroup>
            <Button type="submit">прибавить</Button>
        </Form>
    )
}

export default Add;