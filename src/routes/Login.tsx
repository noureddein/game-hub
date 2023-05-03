import { Box, Flex } from "@chakra-ui/react";

import CustomFormControl from "../components/form/CustomFormControl";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormLayout from "../components/common/FormLayout";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";

const schema = z.object({
    email: z
        .string()
        .nonempty("Email required.")
        .email({ message: "Must be a valid email" }),
    password: z
        .string()
        .nonempty("Password is required.")
        .min(8, "Too short password."),
});

export type LoginFieldData = z.infer<typeof schema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginFieldData>({ resolver: zodResolver(schema) });

    const {
        onSubmitForm,
        errors: resErrors,
        status,
    } = useRegister("/v1/login");

    useEffect(() => {
        if (status === 409) {
            const key = Object.keys(resErrors?.fields)[0];
            setError(key, {
                type: "server",
                message: resErrors.message,
            });
        }
        if (status === 422) {
            resErrors.errors.forEach((obj: { [key: string]: string[] }) => {
                const key = Object.keys(obj)[0];
                setError(key, {
                    type: "server",
                    message: obj[key],
                });
            });
        }
    }, [resErrors]);

    const onSubmit = async (data: LoginFieldData) => {
        const res = await onSubmitForm(data);
        if(res?.status === 200){
            console.log(res)
        }
    };

    return (
        <FormLayout formTitle="Login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomFormControl
                    errMsg={errors.email?.message}
                    register={{
                        ...register("email", {
                            required: true,
                        }),
                    }}
                    isInvalid={!!errors.email}
                    label="Email"
                    placeholder="Enter your email.."
                    isRequired={true}
                />
                <CustomFormControl
                    errMsg={errors.password?.message}
                    register={{
                        ...register("password", {
                            required: true,
                        }),
                    }}
                    isInvalid={!!errors.password}
                    label="Password"
                    placeholder="Enter your password..."
                    type="password"
                    isRequired={true}
                />

                <Flex justifyContent="center" marginTop={5}>
                    <Box
                        type="submit"
                        as="button"
                        borderRadius="md"
                        fontSize="xl"
                        bg="tomato"
                        color="white"
                        px={8}
                        h={12}
                        w="auto"
                    >
                        Submit
                    </Box>
                </Flex>
            </form>
        </FormLayout>
    );
};

export default Login;
