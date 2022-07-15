import {Form, Formik, Field} from "formik";
import CustomInput from "./CustomInput";
import {advancedSchema} from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
    await new Promise ((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const AdvancedForm = () => {
    return (
        <Formik
            initialValues={{
                username: '',
                jobType: '',
                acceptedTos: false
        }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
        >
            {(isSubmitting) => (
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

                    <CustomCheckbox
                    type="checkbox" name="acceptedTos"
                    />
                    <button disabled={isSubmitting} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};
export default AdvancedForm;