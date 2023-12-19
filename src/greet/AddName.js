import {Form} from "react-router-dom";

export function AddName() {
    return (
        <>
            <h1>Add your name:</h1>
            <Form method="get" action="/greet">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" />
                    <button type="submit">Submit</button>
            </Form>
        </>
    );
}
