import { useEffect } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

import useRegister from "../hooks/useRegister";
import useAuth from "../hooks/useAuth";

import FormLayout from "../components/common/FormLayout";
import CustomFormControl from "../components/form/CustomFormControl";
import constants from "../constants";

import { AuthType } from "../providers/AuthProvider";

const schema = z.object({
    email: z
        .string()
        .nonempty("Email required.")
        .email({ message: "Must be a valid email" }),
    password: z.string().nonempty("Password is required."),
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
    } = useRegister("/v1/login", { withCredentials: true });

    const toast = useToast();
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        if (status === 422) {
            resErrors.errors.forEach((obj: { [key: string]: string[] }) => {
                const key = Object.keys(obj)[0];
                toast({
                    title: `Invalid ${constants[key]} input.`,
                    description: obj[key],
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top-right",
                });
                setError(key, {
                    type: "server",
                    message: obj[key],
                });
            });
        }
    }, [resErrors]);

    const onSubmit = async (data: LoginFieldData) => {
        const res = await onSubmitForm(data);
        if (res?.status === 200) {

            setAuth((prev: AuthType) => ({
                ...prev,
                accessToken:res?.data?.accessToken,
                user: res?.data?.user,
            }));
            toast({
                title: "Successful.",
                description: res.data.message,
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top-right",
            });
        }
        if (res?.status === 401) {
            toast({
                title: "Failed to login.",
                description: "Incorrect credentials.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
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
