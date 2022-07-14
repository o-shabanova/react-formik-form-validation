import {Form, Formik, Field} from "formik";
import CustomInput from "./CustomInput";
import {advancedSchema} from "../schemas";

const AdvancedForm = () => {
    return (
        <Formik
            initialValues={{
                username: '',
                jobType: '',
                acceptedTos: false
        }}
            validationSchema={advancedSchema}
        >
            {props => (
                <Form>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    onChange={props.handleChange}*/}
                    {/*    onBlur={props.handleBlur}*/}
                    {/*    value={props.values.name}*/}
                    {/*    name="name"*/}
                    {/*/>*/}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};
export default AdvancedForm;