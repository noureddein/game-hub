import { useState, useEffect } from "react";
import backendClient from "../services/backend-client";
import { type FieldData } from "../routes/Register";

interface SubmitResults {
    errors: any;
    success: null;
    status: number;
}

const useRegister = () => {
    const [submitResults, setSubmitResults] = useState<SubmitResults>({
        errors: {},
        success: null,
        status: 0,
    });

    const onSubmitForm = async (formData: FieldData) => {
        try {
            const res = await backendClient.post("/v1/user/create", {
                ...formData,
            });
            console.log(res);
        } catch (err: any) {
            setSubmitResults({
                ...submitResults,
                errors: err.response.data,
                status: err.response.status,
            });
        }

    };

    return {
        onSubmitForm,
        errors: submitResults.errors,
        status: submitResults.status,
    };
};

export default useRegister;
