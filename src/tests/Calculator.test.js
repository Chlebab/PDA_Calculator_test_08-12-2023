import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1
  let button2
  let button3
  let button4
  let button5
  let button6
  let button7
  let button8
  let button9
  let buttonAdd 
  let buttonSubtract
  let buttonMultiply
  let buttonDivide
  let buttonEqual
  let runningTotal
  
  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3')
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')
    button8 = container.getByTestId('number8')
    button9 = container.getByTestId('number9')
    buttonAdd = container.getByTestId('operator-add')
    buttonSubtract = container.getByTestId('operator-subtract')
    buttonMultiply = container.getByTestId('operator-multiply')
    buttonDivide = container.getByTestId('operator-divide')
    buttonEqual = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and equal 5', () => {
    // const button1 = container.getByTestId('number1')
    // const button4 = container.getByTestId('number4')
    // const buttonAdd = container.getByTestId('operator-add')
    // const buttonEqual = container.getByTestId('operator-equals')
    // const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('5')
  })
  
  it('should subtract 4 from 7 and get 3', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('3')

  })

  it('should multiply 3 by 5 and get 15', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEqual)

    expect(runningTotal.textContent).toEqual('15')

  })

  it('should divide 21 by 7 and get 3', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const button0 = container.getByTestId('number0')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEqual)

    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1)
    fireEvent.click(button5)
    fireEvent.click(button4)
    fireEvent.click(button9)

    expect(runningTotal.textContent).toEqual('1549')
  })

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const button0 = container.getByTestId('number0')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button9)
    fireEvent.click(button0)
    fireEvent.click(buttonDivide)
    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(buttonAdd)
    fireEvent.click(button6)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button1)
    fireEvent.click(button3)
    fireEvent.click(buttonEqual)

    expect(runningTotal.textContent).toEqual('2')
  })

  it('should clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const button5 = container.getByTestId('number5')
    const button6 = container.getByTestId('number6')
    const button7 = container.getByTestId('number7')
    const button8 = container.getByTestId('number8')
    const button9 = container.getByTestId('number9')
    const button0 = container.getByTestId('number0')
    const buttonClear = container.getByTestId('clear')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const buttonEqual = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button3)
    fireEvent.click(buttonClear)
    fireEvent.click(button7)
    fireEvent.click(buttonEqual)

    expect(runningTotal.textContent).toEqual('10')
  })

})

