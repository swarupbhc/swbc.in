/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl">
        SWBC
        <span className="text-theme-purple"> Technologies</span>
      </p>
    </Button>
  );
}
