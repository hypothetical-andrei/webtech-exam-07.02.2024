import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of employees/i)
  expect(h1Element).not.toBeNull()
})

test('renders an task list with select buttons', () => {
	render(<App />)
	const tasks = screen.getAllByText(/select/)
	expect(tasks.length).toBe(2)
})

test('can go into edit mode and back', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const cancelButton = screen.getByText('cancel')
	expect(cancelButton).not.toBeNull()
	act(() => {
		cancelButton.click()
	})
	expect(selectButton).not.toBeNull()
})

test('can modify a record description', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const descriptionInput = screen.getByDisplayValue('task 1')
	fireEvent.change(descriptionInput, { target: { value: 'task 3' }})
	const saveButton = screen.getByDisplayValue('save')
	act(() => {
		saveButton.click()
	})
	const savedDescription = screen.getByText(/task 3/)
	expect(savedDescription).not.toBeNull()
})

test('can modify a record priority',  () => {
	render(<App />)
	const savedItems = screen.getAllByText(/task/)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const priorityInput = screen.getByDisplayValue('high')
	fireEvent.change(priorityInput, { target: { value: 'low' }})
	const saveButton = screen.getByDisplayValue('save')
	act(() => {
		saveButton.click()
	})
	expect(savedItems.length).toBe(2)
})
