# React Training

## Overview

- This document provides the plan, requirements and estimation for React Practice.
- Build Facebook web

## Technical Stack

- React (v18)
- Typescript
- Jest
- React-Testing-Library
- useSWR
- Deploy to Vercel
- ChakraUI

## Develop tools

- Prettier
- Husky
- Eslint

## Target

- Apply everything I have learned into practice.
- Create a diagram analytics database
- Apply private router, public router
- Apply HOC
- Use JSON server to build API
- Apply normalizing state shape
- Can use LocalStorage and understand hydrate data from localStorage in Authentication

## Requirements

- [link](https://docs.google.com/document/d/1eKqjMQv3JoMqsaLNxoOMD_m-7_T5Af96g5kLDgpKEpk/edit)

## Overview app feature

- Create a practice clone Facebook app with some features:
  - Signup
  - SignIn
  - View post
  - Create a post (status, image)
  - Reaction post (only like)
  - Comment post
  - Reaction comment post (only like)

## Design

- Refer [design](<[<https://www.figma.com/file/Bkkhwv7NtxHSrucbVmnCUx/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page-(Community)?type=design&node-id=117-336&mode=design&t=U9mmh1mg27ZOD39P-0>](https://www.figma.com/file/sYK9lV1oRDcbY3O2NJupNz/Facebook-UI-(Community)?type=design&node-id=0-1&mode=design&t=EfzBS1CjAVEFwLZi-0)>)

## Prerequisites

- node: v20.0.0
- pnpm: v8.6.1

## Getting started

- Step 1: Cloning the repo
  `https://gitlab.asoft-python.com/thao.ha/react-training.git`
  or
  `git@gitlab.asoft-python.com:thao.ha/react-training.git`

- Step 2: Checkout branch `git checkout feat/facebook`

- Step 3: Go to the folder `cd facebook`

- Step 4: Install packages `pnpm install`

- Step 5: Run project `pnpm run dev`

- Step 6: Follow to command lines below

| Command         | Action                                             |
| :-------------- | :------------------------------------------------- |
| `pnpm run dev`  | Start local dev server at `http://127.0.0.1:5173/` |
| `pnpm run jest` | Run unit test                                      |
