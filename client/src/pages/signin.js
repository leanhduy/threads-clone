import React from 'react'
import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { colors } from '../styles'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGN_IN, toastError } from '../utils'
import { useContext } from 'react'
import { UserContext } from '../context'
import { ToastContainer } from 'react-toastify'

const SignIn = () => {
    const navigate = useNavigate()
    const { setUserId, login } = useContext(UserContext)
    const [signIn] = useMutation(SIGN_IN, {
        onCompleted: async (data) => {
            // ? Set up the Context User
            setUserId(data?.signin?.payload?.user?.id)

            // ? Store the JWT into localStorage
            localStorage.setItem('token', data?.signin?.payload?.token)

            // ? Check the response code
            const code = data?.signin?.code
            if (code === 401) {
                toastError('Wrong username or password')
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
            } else {
                // ? Cache the logged in user id
                login(data?.signin?.payload?.user?.id)
                // ? Navigate to the home page
                navigate('/')
            }
        },
        onError: () => {
            toastError('Something wrong. Please try again!')
        },
    })

    const handleSignin = async (values) => {
        // ? Send username & password to backend server via mutation
        await signIn({
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
                    handleSignin(values)
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
                        <FormTitle>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: '1.15rem', fontWeight: 800 }}
                            >
                                Log in with your account
                            </Typography>
                        </FormTitle>
                        <FormRow>
                            <StyledInput
                                type="text"
                                id="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                values={formik.values.username}
                                placeholder="Username, phone or email"
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
                            <StyledInput
                                type="password"
                                id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                values={formik.values.password}
                                placeholder="Password"
                            />
                        </FormRow>
                        {formik.touched.password && formik.errors.password ? (
                            <FormRow>
                                <ErrorNotification>
                                    {formik.errors.password}
                                </ErrorNotification>
                            </FormRow>
                        ) : null}
                        <StyledButton variant="contained" type="submit">
                            Sign In
                        </StyledButton>
                        <ForgotPasswordLink>
                            Forgot password?
                        </ForgotPasswordLink>
                    </StyledForm>
                )}
            </Formik>
            <ToastContainer containerId={1} />
        </StyledContainer>
    )
}

export default SignIn

//#region Styled-components
const StyledContainer = styled.div({
    alignItems: 'center',
    backgroundImage: 'url("./images/bg.jpg")',
    backgroundSize: 'cover',
    color: colors.black.base,
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
})

const StyledForm = styled.form({
    backgroundColor: colors.black.base,
    borderRadius: '10px',
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2.5rem',
    rowGap: '1rem',
    width: '480px',
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
    fontWeight: 600,
    margin: 0,
})

const StyledInput = styled(TextField)({
    backgroundColor: colors.grey.darker,
    color: colors.white,
    borderRadius: '10px',
    flexGrow: 1,
    '.MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    ' .MuiInputBase-root': {
        color: colors.white,
    },
})

const StyledButton = styled(Button)({
    backgroundColor: colors.white,
    color: colors.black.lighter,
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 700,
    padding: '1rem 0',
    textTransform: 'none',
    ':hover': {
        backgroundColor: colors.white,
        color: colors.grey.light,
    },
})

const FormTitle = styled(FormRow)({
    alignSelf: 'center',
})

const ForgotPasswordLink = styled(FormRow)({
    alignSelf: 'center',
    color: colors.grey.light,
})
//#endregion Styled-components
