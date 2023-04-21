import {
    Grid,
    GridItem,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormControl from "../components/form/CustomFormControl";

type FieldData = z.infer<typeof schema>;

const schema = z
    .object({
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
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
// const Register = () => {
//     return (
//         <Grid
//             templateColumns={{
//                 base: "repeat(6, 1fr)",
//                 md: "repeat(6, 1fr)",
//             }}
//             gap={0}
//             border="1px"
//             borderColor="gray.200"
//             marginTop={7}>
//             <GridItem
//                 colStart={{
//                     base: 2,
//                     xl: 3,
//                 }}
//                 colEnd={{
//                     base: 6,
//                     xl: 5,
//                 }}
//                 // bg="gray.600"
//                 borderTopRadius={7}>

//                 <Text paddingY="2rem" color="blackAlpha.900" textAlign="center">
//                     Register
//                 </Text>
//             </GridItem>

//             <GridItem
//                 padding={4}
//                 // bg="blue.200"
//                 colStart={{
//                     base: 2,
//                     xl: 3,
//                 }}
//                 colEnd={{
//                     base: 6,
//                     xl: 5,
//                 }}
//                 borderBottomRadius={7}>
//                 <form>
//                     <FormControl>
//                         <FormLabel htmlFor="first-name">First name</FormLabel>
//                         <Input
//                             id="first-name"
//                             type="text"
//                             placeholder="Enter your first name"
//                             variant="outline"
//                             bgColor=""
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <FormLabel htmlFor="last-name">Last name</FormLabel>
//                         <Input
//                             id="last-name"
//                             type="text"
//                             placeholder="Enter your last name"
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <FormLabel htmlFor="email">Email</FormLabel>
//                         <Input
//                             id="email"
//                             type="email"
//                             placeholder="Enter your email"
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <FormLabel htmlFor="password">Password</FormLabel>
//                         <Input
//                             id="password"
//                             type="password"
//                             placeholder="Enter your password"
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <FormLabel htmlFor="confirm-password">
//                             Confirm password
//                         </FormLabel>
//                         <Input
//                             id="confirm-password"
//                             type="password"
//                             placeholder="Enter your confirm password"
//                         />
//                     </FormControl>
//                     <Flex justifyContent="center">
//                         <Box
//                             as="button"
//                             borderRadius="md"
//                             bg="tomato"
//                             color="white"
//                             px={8}
//                             h={12}
//                             w="auto"
//                             marginRight={0}>
//                             Submit
//                         </Box>
//                     </Flex>
//                 </form>
//             </GridItem>
//         </Grid>
//     );
// };
const Register = () => {
    const {
        register,
        handleSubmit,
        formState,
        watch,
        formState: { errors, isValid },
    } = useForm<FieldData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldData) => console.log(data);
    console.log(errors);
    return (
        <Grid
            templateColumns={{
                base: "repeat(6, 1fr)",
                md: "repeat(6, 1fr)",
            }}
            gap={0}
            marginTop={7}>
            <GridItem
                colStart={{
                    base: 2,
                    xl: 3,
                }}
                colEnd={{
                    base: 6,
                    xl: 5,
                }}>
                <VStack border="2px" borderColor="gray.400" borderRadius={5}>
                    <Box w="100%">
                        <Text
                            paddingY="2rem"
                            textAlign="center"
                            fontSize="5xl"
                            fontWeight="bold">
                            Register
                        </Text>
                    </Box>

                    <Box w="100%" margin="0px" padding={7}>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                    w="auto">
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
