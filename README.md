# Application Kanban Board

[Hosted on Vercel](https://application-kanban.vercel.app/)

## Description

1. mockData is present in the `mockData` folder.
2. utils contain the helper functions.
    a. using `javascript-time-ago` to display the time in a human-readable format.
    b. using `matchApplication` to filter applications based on status and search query.
3. using `@dnd-kit/core` for drag and drop functionality.
4. types assumed for the application are present in the `types` folder.
5. on mobile drag and drop is not visible, instead a simple list of applications is shown. (this can be further improved to show a modal to edit status of the application)
6. the home page can further be divided into smaller components for better structure.


## Getting Started

First, run the development server after installing the dependencies:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
