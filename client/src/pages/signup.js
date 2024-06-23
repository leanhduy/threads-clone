import styled from '@emotion/styled'
import { Button, Divider, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { colors } from '../styles'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { SIGN_UP, toastError } from '../utils'
import { useContext } from 'react'
import { UserContext } from '../context'

const SignUp = () => {
    const navigate = useNavigate()
    const { setUserId, login } = useContext(UserContext)
    const [signUp] = useMutation(SIGN_UP, {
        onCompleted: async (data) => {
            // ? Set up the Context User
            setUserId(data?.signup?.payload?.user?.id)

            // ? Store the JWT into localStorage
            localStorage.setItem('token', data?.signup?.payload.token)

            // ? Log In
            login(data?.signup?.payload?.user?.id)

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
                        <FormTitle>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Sign Up
                            </Typography>
                            <Typography variant="body1">
                                It's quick and easy.
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
                            Sign up
                        </StyledButton>
                        <StyledDivider />
                        <SignInLink>
                            Already have an account?{' '}
                            <StyledLink to="/signin">Sign In</StyledLink>
                        </SignInLink>
                    </StyledForm>
                )}
            </Formik>
        </StyledContainer>
    )
}

export default SignUp

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
    // alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
})

const StyledDivider = styled(Divider)({
    '&.MuiDivider-root': {
        backgroundColor: colors.white,
    },
})

const SignInLink = styled(FormRow)({
    alignSelf: 'center',
    color: colors.white.light,
})

const StyledLink = styled(Link)({
    fontWeight: '600',
    // textDecoration: 'none',
})
//#endregion Styled-components
