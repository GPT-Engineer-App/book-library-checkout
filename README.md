# book-library-checkout

Generate an App with the following layout:
- Single page with a bottom navigation having two button options Library, Checkout
- The Library tab needs to contain a list of books in card layout. Each card must include a checkbox that the user can select
- The Checkout tab will contain the books the user has selected and the books need to shown in a table format; the columns must be Title, Author, ISBN and Price

The main App page must be main.js
The library page must be ui/library.js
The checkout page must be ui/checkout.js

The service to fetch the books listing must be service/library.js
The service to perform the checkout and payment process must be service/payment.js

Ensure that the project layout is organised the way described above

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with Daisy UI and Tailwind CSS.

- Vite
- React
- Daisy UI
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/book-library-checkout.git
cd book-library-checkout
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
