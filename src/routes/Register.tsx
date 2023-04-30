﻿import { Grid, GridItem, Text, Box, Flex, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormControl from "../components/form/CustomFormControl";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";

export type FieldData = z.infer<typeof schema>;

const schema = z
    .object({
        username: z.string().min(4, "Username must be at least 4 characters."),
        firstName: z
            .string()
            .min(4, "First name must be at least 4 characters."),
        lastName: z.string().min(4, "Last name must be at least 4 characters."),
        email: z
            .string()
            .nonempty("Email required.")
            .email({ message: "Must be a valid email" }),
        password: z
            .string()
            .nonempty("Password is required.")
            .min(8, "Too short password."),
        confirmPassword: z.string().nonempty("Confirm password is required."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ["confirmPassword"],
    });

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FieldData>({ resolver: zodResolver(schema) });
    const { onSubmitForm, errors: resErrors, status } = useRegister();

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

    const onSubmit = async (data: FieldData) => {
        await onSubmitForm(data);
    };
    return (
        <Grid
            templateColumns={{
                base: "repeat(6, 1fr)",
                md: "repeat(6, 1fr)",
            }}
            gap={0}
            marginTop={7}
        >
            <GridItem
                colStart={{
                    base: 2,
                    xl: 3,
                }}
                colEnd={{
                    base: 6,
                    xl: 5,
                }}
            >
                <VStack border="2px" borderColor="gray.400" borderRadius={5}>
                    <Box w="100%">
                        <Text
                            paddingY="2rem"
                            textAlign="center"
                            fontSize="5xl"
                            fontWeight="bold"
                        >
                            Register
                        </Text>
                    </Box>

                    <Box w="100%" margin="0px" padding={7}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CustomFormControl
                                errMsg={errors.username?.message}
                                register={{
                                    ...register("username", {
                                        required: true,
                                    }),
                                }}
                                isInvalid={!!errors.username}
                                label="Username"
                                placeholder="Enter your username.."
                            />
                            <CustomFormControl
                                errMsg={errors.firstName?.message}
                                register={{
                                    ...register("firstName", {
                                        required: true,
                                    }),
                                }}
                                isInvalid={!!errors.firstName}
                                label="First name"
                                placeholder="Enter your first name.."
                            />

                            <CustomFormControl
                                errMsg={errors.lastName?.message}
                                register={{
                                    ...register("lastName", {
                                        required: true,
                                    }),
                                }}
                                isInvalid={!!errors.lastName}
                                label="Last name"
                                placeholder="Enter your last name.."
                            />
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
                            <CustomFormControl
                                errMsg={errors.confirmPassword?.message}
                                register={{
                                    ...register("confirmPassword", {
                                        required: true,
                                    }),
                                }}
                                isInvalid={!!errors.confirmPassword}
                                label="Confirm password"
                                placeholder="Enter your confirm password..."
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
                    </Box>
                </VStack>
            </GridItem>
        </Grid>
    );
};

export default Register;
