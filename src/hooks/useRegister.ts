import { useState } from "react";
import backendClient from "../services/backend-client";

interface SubmitResults {
    errors: any;
    status: number;
}

const useRegister = (endpoint: string, config = {}) => {
    const [submitResults, setSubmitResults] = useState<SubmitResults>({
        errors: {},
        status: 0,
    });

    const resetErrors = () =>
        setSubmitResults({ ...submitResults, errors: {} });

    const onSubmitForm = async <T>(formData: T) => {
        try {
            const res = await backendClient.post(endpoint, {
                ...formData,
            }, config);
            return res;
        } catch (err: any) {
            setSubmitResults({
                ...submitResults,
                errors: err.response.data,
                status: err.response.status,
            });
            return err.response;
        }
    };

    return {
        onSubmitForm,
        resetErrors,
        errors: submitResults.errors,
        status: submitResults.status,
    };
};

export default useRegister;
