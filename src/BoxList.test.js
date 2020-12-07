import React from 'react';
import {render, fireEvent } from "@testing-library/react"
import BoxList from './BoxList'

it("renders without crashing", function(){
    render(<BoxList />)
})

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot(); })

it('should add new item', function () {
    const {queryByText, getByLabelText} = render(<BoxList />)
    const input = getByLabelText('backgroundColor');
    const btn =  queryByText('Add Box')
    expect(queryByText('backgroundColor: Lavendar')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'Lavendar'}})
    fireEvent.click(btn);
    expect(queryByText('backgroundColor: Lavendar')).toBeInTheDocument();
})