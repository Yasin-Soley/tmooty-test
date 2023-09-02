'use client'
import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	useEffect,
	useState,
} from 'react'

import { MuiFileInput } from 'mui-file-input'
import {
	Button,
	Container,
	FormControl,
	TextField,
	Typography,
} from '@mui/material'

export default function CreatePostPage() {
	const [file, setFile] = useState<File | null>(null)
	const [title, setTitle] = useState<string>('')
	const [content, setContent] = useState<string>('')

	const handleFileChange = (newValue: File | null) => {
		setFile(newValue)
	}
	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}
	const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value)
	}

	const handleSubmit = () => {
		let formData = { file, title, content }
		console.log(formData)
	}

	// useEffect(() => {
	// 	let formData = { file, title, content }
	// 	console.log(formData)
	// }, [file, title, content])

	return (
		<Container>
			<Typography variant="h4" component="h1" textAlign="center" mt={10}>
				Create Your Blog Post!
			</Typography>

			<FormControl
				sx={{
					margin: '3rem 0',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					rowGap: '2rem',
				}}
			>
				<MuiFileInput
					placeholder="choose an image for your post"
					size="small"
					value={file}
					onChange={handleFileChange}
				/>

				<TextField
					id="outlined-basic"
					label="Post Title"
					variant="outlined"
					value={title}
					onChange={handleTitleChange}
				/>
				<TextField
					id="outlined-multiline-flexible"
					label="Post Content"
					multiline
					variant="outlined"
					value={content}
					onChange={handleContentChange}
				/>

				<Button
					onClick={handleSubmit}
					variant="outlined"
					color="primary"
				>
					Submit
				</Button>
			</FormControl>
		</Container>
	)
}
