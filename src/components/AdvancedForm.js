import {Form, Formik, Field} from "formik";
import CustomInput from "./CustomInput";
import {advancedSchema} from "../schemas";
import CustomSelect from "./CustomSelect";

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
                    <CustomSelect
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please select a job type</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                            <option value="other">Other</option>

                    </CustomSelect>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};
export default AdvancedForm;