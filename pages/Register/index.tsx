import { useState } from 'react'
import type { NextPage } from 'next'
import { Container, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Navigation } from '../../components'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useAccountContext } from '../../contexts'

const Register: NextPage = () => {
	const [showPassword, setShowPassword] = useState(false)
	const { setAccount } = useAccountContext()

	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Enter a valid email')
			.required('An email is required'),
		password: yup
			.string()
			.required('A password is required')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({ resolver: yupResolver(schema) })

	const onSubmit = (data: any) => {
		const dataBody = {
			email: data.email,
			password: data.password,
		}

		console.log('heyy')

		setAccount(dataBody)
	}

	const toggleShowPassword = (): void => setShowPassword(!showPassword)

	return (
		<>
			<Navigation />
			<Container className='d-flex align-items-center justify-content-center'>
				<Card>
					<Form>
						<Form.Control
							type='email'
							placeholder='Enter email'
							{...register('email')}
						/>
						{/* {errors.email && (
							<Form.Text className='text-danger'>
								{errors.email?.message}
							</Form.Text>
						)} */}

						<InputGroup className='mb-3'>
							<Form.Control
								aria-label='Password'
								type={showPassword ? 'text' : 'password'}
								placeholder='Password'
								{...register('password')}
							/>
							<InputGroup.Text
								onClick={toggleShowPassword}
								className='cursor-pointer d-block'
							>
								{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
							</InputGroup.Text>
						</InputGroup>
						{/* {errors.password && (
							<Form.Text className='text-danger'>
								{errors.password?.message}
							</Form.Text>
						)} */}
						<Button
							variant='primary'
							type='submit'
							onClick={handleSubmit(onSubmit)}
						>
							Submit
						</Button>
					</Form>
				</Card>
			</Container>
		</>
	)
}

export default Register
