import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesProvider } from '../context/LikesContext';
import LikeButton from './LikeButton';

describe('LikeButton', () => {
  it('increases the like count when clicked', async () => {
    // Arrange
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );
    const button = screen.getByRole('button', { name: /like/i });
    expect(button).toHaveTextContent('Like · 0');

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toHaveTextContent('Like · 1');
  });
});