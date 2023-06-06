import { fireEvent, render, screen } from '@testing-library/react'

import { useForm } from 'react-hook-form'
import { TextInput } from '.'

const TestTextInput = () => {
  const { register } = useForm()
  return <TextInput register={register} name="myInput" />
}

it('renders the input component', () => {
  render(<TestTextInput />)
  const inputElement = screen.getByRole('textbox')
  expect(inputElement).toBeInTheDocument()
})

it('registers the input with the form', () => {
  render(<TestTextInput />)
  const inputElement = screen.getByRole('textbox')

  fireEvent.change(inputElement, { target: { value: 'Hello' } })
  expect(inputElement).toHaveValue('Hello')
})
