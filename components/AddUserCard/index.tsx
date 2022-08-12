import { FC } from 'react'
import { Container, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserContext } from '../../contexts'

export const AddUserCard: FC = () => {
	const { addUser } = useUserContext()

	const schema = yup.object().shape({
		email: yup.string().email(),
		first_name: yup.string().min(3),
		last_name: yup.string().min(3),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: any) => {
		console.log('create user')
		const { email, first_name, last_name } = data

		addUser({ email, first_name, last_name })
	}

	return (
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
							type='text'
							placeholder='First Name'
							{...register('first_name')}
						/>
						{/* {errors.email && (
							<Form.Text className='text-danger'>
								{errors.first_name?.message}
							</Form.Text>
						)} */}
					</InputGroup>

					<InputGroup className='mb-3'>
						<Form.Control
							type='text'
							placeholder='Last Name'
							{...register('last_name')}
						/>
						{/* {errors.email && (
							<Form.Text className='text-danger'>
								{errors.last_name?.message}
							</Form.Text>
						)} */}
					</InputGroup>
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
	)
}
