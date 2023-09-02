'use client'
import PostItem from '@/components/PostItem'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export type Post = {
	userId: number
	id: number
	title: string
	content: string
	slug: string
	image: string
	publishedAt: string
}

export type User = {
	id: number
	firstname: string
	lastname: string
}

const HomePage = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const [users, setUsers] = useState<User[]>([])

	const fetchPosts = async () => {
		try {
			console.log('fetching data ...')

			const response = await fetch('https://jsonplaceholder.org/posts')
			const jsonData = await response.json()
			setPosts(jsonData)
		} catch (error) {
			console.error('خطا در دریافت پست‌ها از API', error)
		}
	}

	const fetchUsers = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.org/users')
			const jsonData = await response.json()
			setUsers(jsonData)
		} catch (error) {
			console.error('خطا در دریافت کاربرها از API', error)
		}
	}

	useEffect(() => {
		fetchPosts()
		fetchUsers()

		const intervalId = setInterval(fetchPosts, 10000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div>
			<PostItem posts={posts} users={users} />
		</div>
	)
}

export default HomePage
