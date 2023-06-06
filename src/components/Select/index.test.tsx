import { fireEvent, render, screen } from '@testing-library/react'
import { useForm, FormProvider } from 'react-hook-form'
import { TextSelect } from './'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const TestComponent = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <TextSelect name="mySelect" options={options} control={methods.control} />
    </FormProvider>
  )
}

it('renders the select component with options', () => {
  render(<TestComponent />)

  const selectElement = screen.getByRole('combobox')
  expect(selectElement).toBeInTheDocument()

  const optionElements = screen.getAllByRole('option')
  expect(optionElements).toHaveLength(options.length)
  options.forEach((option, index) => {
    expect(optionElements[index]).toHaveValue(option.value)
    expect(optionElements[index]).toHaveTextContent(option.label)
  })
})

it('updates the selected value when an option is selected', () => {
  render(<TestComponent />)

  const selectElement = screen.getByRole('combobox')

  // Seleciona a segunda opção
  fireEvent.change(selectElement, { target: { value: options[1].value } })

  // Verifica se o valor selecionado foi atualizado corretamente
  expect(selectElement).toHaveValue(options[1].value)

  // Seleciona a terceira opção
  fireEvent.change(selectElement, { target: { value: options[2].value } })

  // Verifica se o valor selecionado foi atualizado corretamente
  expect(selectElement).toHaveValue(options[2].value)
})
