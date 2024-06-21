import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { colors } from '../styles'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGN_UP, toastError, toastSuccess } from '../utils'
import { useContext } from 'react'
import { UserContext } from '../context'

const SignUp = () => {
    const navigate = useNavigate()
    const { login } = useContext(UserContext)
    const [signUp] = useMutation(SIGN_UP, {
        onCompleted: async (data) => {
            // ? Set up the Context User

            // ? Store the JWT into localStorage
            localStorage.setItem('token', data?.signup?.payload.token)

            // ? Log In
            login(data.signup.payload.user.id)

            // ? Navigate to the home page
            navigate('/')
        },
        onError: () => {
            toastError('Something wrong. Please try again!')
        },
    })

    const handleSignup = async (values) => {
        // ? Send username & password to backend server via mutation
        signUp({
            variables: {
                username: values.username,
                password: values.password,
            },
        })
    }

    return (
        <StyledContainer>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    handleSignup(values)
                }}
                validationSchema={Yup.object({
                    username: Yup.string().required('Username is required'),
                    password: Yup.string()
                        .min(3, 'Password must be between 3 - 8 characters')
                        .max(8, 'Password must be between 3 - 8 characters')
                        .required('Password is required'),
                })}
            >
                {(formik) => (
                    <StyledForm onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <StyledLabel htmlFor="username">
                                Username
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                values={formik.values.username}
                            />
                        </FormRow>
                        {formik.touched.username && formik.errors.username ? (
                            <FormRow>
                                <ErrorNotification>
                                    {formik.errors.username}
                                </ErrorNotification>
                            </FormRow>
                        ) : null}
                        <FormRow>
                            <StyledLabel htmlFor="password">
                                Password
                            </StyledLabel>
                            <StyledInput
                                type="password"
                                id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                values={formik.values.password}
                            />
                        </FormRow>
                        {formik.touched.password && formik.errors.password ? (
                            <FormRow>
                                <ErrorNotification>
                                    {formik.errors.password}
                                </ErrorNotification>
                            </FormRow>
                        ) : null}
                        <Button variant="contained" type="submit">
                            Sign up
                        </Button>
                    </StyledForm>
                )}
            </Formik>
        </StyledContainer>
    )
}

export default SignUp

const StyledContainer = styled.div({
    alignItems: 'center',
    backgroundImage: 'url("./images/bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
})

const StyledForm = styled.form({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    width: '350px',
})

const FormRow = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '.5rem',
    justifyContent: 'flex-start',
    margin: 0,
})

const ErrorNotification = styled.p({
    color: colors.red.base,
    fontWeight: 'bold',
    margin: 0,
})

const StyledInput = styled.input({
    flexGrow: 1,
    height: '36px',
    borderRadius: '5px',
})

const StyledLabel = styled.label({
    width: '75px',
    fontWeight: 'bold',
})
