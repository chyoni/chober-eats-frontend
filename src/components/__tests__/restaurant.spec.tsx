import { render } from '@testing-library/react';
import React from 'react';
import { Restaurant } from '../restaurant';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Restaurant />', () => {
  it('renders OK with props', () => {
    const restaurantProps = {
      id: 1,
      coverImg: 'x',
      restaurantName: 'testRestaurant',
      categoryName: 'test',
    };
    const { debug, getByText, container } = render(
      <Router>
        <Restaurant {...restaurantProps} />
      </Router>,
    );
    debug();
    getByText(restaurantProps.restaurantName);
    getByText(restaurantProps.categoryName);
    expect(container.firstChild).toHaveAttribute(
      'href',
      `/restaurant/${restaurantProps.id}`,
    );
  });
});
