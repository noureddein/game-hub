import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";

interface FormControlTypes {
    isInvalid: boolean;
    register: object;
    type?: string | "text";
    errMsg?: string;
    id?: string;
    placeholder?: string;
    label?: string;
    isRequired?: boolean | false;
}

const CustomFormControl = (props: FormControlTypes) => {
    const {
        id,
        register,
        placeholder,
        type,
        isInvalid,
        errMsg,
        label,
        isRequired,
    } = props;
    
    return (
        <>
            <FormControl
                isInvalid={isInvalid}
                marginBottom={2}
                isRequired={isRequired}>
                <FormLabel htmlFor={id}>{label}</FormLabel>
                <Input
                    {...register}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
                <FormErrorMessage>{errMsg}</FormErrorMessage>
            </FormControl>
        </>
    );
};

export default CustomFormControl;
