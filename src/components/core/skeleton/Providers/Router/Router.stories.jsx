import React from 'react';

import NOTES from 'stories/common/notes';
import Router from './index';

const defaultProps = {
  children: <div>Placeholder</div>
};

export default {
  parameters: {
    notes: NOTES.hoc
  },
  title: 'Components|Skeleton/Router'
};

export const normal = () => {
  const props = { ...defaultProps };
  const { children } = props;

  return <Router>{children}</Router>;
};
