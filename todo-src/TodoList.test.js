import React from 'react';
import {render, fireEvent } from "@testing-library/react"
import TodoList from './TodoList'

it("renders without crashing", function(){
    render(<TodoList />)
})

it("matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot(); })

it('should add new item', function () {
        const {queryByText, getByLabelText} = render(<TodoList />)
        const input = getByLabelText('Todo');
        const btn =  queryByText('Add Todo');
        expect(queryByText('wash dishes')).not.toBeInTheDocument();
        fireEvent.change(input, {target: {value: 'wash dishes'}});
        fireEvent.click(btn);
        expect(queryByText('wash dishes')).toBeInTheDocument();
    });