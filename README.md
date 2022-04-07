## NELSON ASSIGNMENT

## TASKS:

- focus on users of a mobile device; &#10003;
- support products with different ‘structures’. Products of a PARENT/CHILD structure require the user to first select on or more options (e.g. size) before the item can be added to the basket, STANDALONE products can be added to the basket directly; &#10003;
take into account which data is provided by the API (see the links in the previous section); &#10003;
- take into account that we can only offer complementary products for a small percentage of the products in the catalogue once the cross-sell feature launches;
make it easy for customers to add a product to the cart in a cross-selling scenario while not blocking users from converting. &#10003;
- A page that implements a ‘dummy’ add-to-cart buttons which triggers the add-to-cart confirmation modal &#10003;
- Fetching of the provided sample data via XHR and using the data to populate different aspects of the interface &#10003;
- A cross-sell interaction for both a CHILD and STANDALONE product, i.e. selecting a cross-sell item simulating adding it to the basket () &#10003;
- Unit tests for (some) of the most critical functionality (e.g. opening the modal, fetching products for cross-selling, selecting a CHILD). &#10003;

## ABOUT THE ASSIGNMENT:
- [Live demo]
- Built with Next.js using React.js, TypeScript & Jest (for testing).
- Some dependencies: Swiper, Axios, Mock Service Worker.
- 



___________________

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
