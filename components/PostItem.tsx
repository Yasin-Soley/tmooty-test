'use client'

import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material'

import { Post, User } from '../app/page'
import Link from 'next/link'

export default function PostItem({
	posts,
	users,
}: {
	posts: Post[]
	users: User[]
}) {
	return (
		<Container>
			<Box sx={{ my: 5, textAlign: 'center' }}>
				<Typography variant="h4" component="h2" gutterBottom>
					Our Blog
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					We share our best ideas in our blog
				</Typography>
			</Box>
			<Grid container spacing={4}>
				{posts.map((post, index) => {
					// console.log(post)
					return (
						<Grid item xs={12} md={6} key={index}>
							<Link href={`posts/${post.id}`}>
								<Card
									sx={{
										display: 'flex',
										height: '250px',
									}}
								>
									<CardMedia
										component="img"
										sx={{
											width: '30%',
											objectFit: 'cover',
										}}
										image={post.image}
										alt={post.title}
									/>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
										}}
									>
										<CardContent sx={{ flex: '1 0 auto' }}>
											<Typography
												component="h5"
												variant="h5"
											>
												{post.title}
											</Typography>
										</CardContent>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												p: 1,
											}}
										>
											<Box sx={{ ml: 1 }}>
												<Typography
													variant="subtitle2"
													color="text.secondary"
												>
													{post.publishedAt}
												</Typography>
											</Box>
										</Box>
									</Box>
								</Card>
							</Link>
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}
