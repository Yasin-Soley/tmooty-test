'use client'

import { useEffect, useState } from 'react'
import NextLink from 'next/link'

import { Post } from '@/app/page'

import { Card, Container, Typography, Link } from '@mui/material'

type Comment = {
	id: number
	postId: string
	comment: string
}

export default function PostPage({ params }: { params: { postId: string } }) {
	const [comments, setComments] = useState<Comment[]>([])
	const [post, setPost] = useState<Post>()

	useEffect(() => {
		const findPostComments = async () => {
			try {
				const commentRes = await fetch(
					`https://jsonplaceholder.org/comments`
				)
				const postRes = await fetch(
					`https://jsonplaceholder.org/posts/${params.postId}`
				)
				const allComments: Comment[] = await commentRes.json()
				const currentPost = await postRes.json()

				const currentPostComments = allComments.filter(
					(cm) => cm.postId == params.postId
				)
				setComments(currentPostComments)
				setPost(currentPost)
			} catch (error) {
				console.error('خطا در دریافت کامنت‌ها از API', error)
			}
		}
		findPostComments()
	}, [params.postId])

	return (
		<Container sx={{ padding: '1rem' }}>
			<Card sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography sx={{ padding: '1rem' }} variant="h4">
					{post?.title}
				</Typography>
				<img src={post?.image} alt={post?.title} />
				<Typography sx={{ padding: '1rem' }}>
					{post?.content}
				</Typography>
			</Card>

			<Card sx={{ padding: '1rem' }}>
				<Typography variant="h4" component="h5">
					Post Comments
				</Typography>

				{comments.length > 0 ? (
					comments.map((cm) => (
						<Typography
							key={cm.id}
							variant="subtitle2"
							sx={{
								my: '20px',
								border: '1px solid #e2e2e2',
								padding: '10px',
							}}
						>
							{cm.comment}
						</Typography>
					))
				) : (
					<Typography my={3} variant="subtitle2">
						There is no comment to show for this post!
					</Typography>
				)}
				<NextLink href="/">
					<Link component="button">Home</Link>
				</NextLink>
			</Card>
		</Container>
	)
}
