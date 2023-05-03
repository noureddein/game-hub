import { useState, useEffect } from "react";
import backendClient from "../services/backend-client";
import { type FieldData } from "../routes/Register";

interface SubmitResults {
    errors: any;
    success: null;
    status: number;
}

const useRegister = (endpoint: string) => {
    const [submitResults, setSubmitResults] = useState<SubmitResults>({
        errors: {},
        success: null,
        status: 0,
    });

    const onSubmitForm = async <T>(formData: T) => {
        try {
            const res = await backendClient.post(endpoint, {
                ...formData,
            });
            return res
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
