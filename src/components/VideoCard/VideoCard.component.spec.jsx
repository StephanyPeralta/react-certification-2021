import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));

const dispatch = jest.fn();

const videoCardMock = {
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
};

describe('VideoCard component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders VideoCard properties', () => {
    const state = {
      searchStatus: true,
      searchTerm: 'wizeline',
      videoProps: {},
    };
    useVideo.mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <VideoCard {...videoCardMock} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(videoCardMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoCardMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoCardMock.description)).toBeInTheDocument();
  });

  it('renders card-relatedvideos style if searchStatus is false', () => {
    const state = {
      searchStatus: false,
      searchTerm: 'wizeline',
      videoProps: {},
    };
    useVideo.mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <VideoCard {...videoCardMock} />
      </MemoryRouter>
    );

    const videoCardRV = screen.getByTestId('card-relatedvideos');

    expect(state.searchStatus).toBeFalsy();
    expect(videoCardRV).toBeInTheDocument();
  });
});
