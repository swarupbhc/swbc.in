/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
            {' '}
            <p className="text-lg text-gray-400 font-light">
              work@swarup.dev
            </p>
            <p className="text-lg text-gray-400 font-light">
              Gobardanga, West Bengal, 743273
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Info
            </h1>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vQam5xywhVi7sUC-VfmCwCAkuXILkiqjnXRdLbOrcJcUBPHS_mMmhy1r-E5CvhXuUpXzIXl3Q_cZy2G/pub" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Terms & Conditions
            </Button>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vS5_R4wJwFPrLL0vAKYlTxniTc4-HTA9jZTqlrcoVhIN6cVTu9bndti_x4eDIz1HJl0IUYdLmoqZ4dV/pub" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Privacy Policy
            </Button>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vSI62yK4YxZG_M2LaqbJ-X7U-Zd_-4Hapvg1sS_YkfenSXMAp_FKxBMXsJEWhl9FJ-R7dH4zGJLoqin/pub" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Refund Policy
            </Button>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vR-Mvqqkcu1N6RekTZiPyP4j3o88fM7NpN-ifqalxHvuwsRP9mh_Vo-kKkT8m3g_RtkNx_hdbRVmAGv/pub" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Contact us
            </Button>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/swarupbc/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://linkedin.com/company/swbc-tech" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="https://github.com/swarupbc" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2024 - All rights reserved - SWBC Technologies
          </p>
          {/* <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Racmat Hafidz Fadli
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
