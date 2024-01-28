// todo-frontend/src/Todos/Todo.test.js
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Todo from './Todo'

test('renders a todo correctly', () => {
	const todo = { _id: '1', text: 'Sample Todo', done: false }
	const deleteTodo = jest.fn()
	const completeTodo = jest.fn()

	render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

	expect(screen.getByText('Sample Todo')).toBeInTheDocument()
	expect(screen.getByText('This todo is not done')).toBeInTheDocument()

	fireEvent.click(screen.getByText('Delete'))
	expect(deleteTodo).toHaveBeenCalledWith(todo)

	fireEvent.click(screen.getByText('Set as done'))
	expect(completeTodo).toHaveBeenCalledWith(todo)
})
