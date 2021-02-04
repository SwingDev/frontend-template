import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'chai';
import React from 'react';

import { Rocket } from '../Rocket';

describe('Rocket', () => {
  it('renders rocket', () => {
    const result = render(<Rocket />);

    const rocket = result.getByText('🚀');

    expect(rocket).to.exist;

    userEvent.click(rocket);

    const fire = screen.getByText('🔥');

    expect(fire).to.exist;
  });
});
