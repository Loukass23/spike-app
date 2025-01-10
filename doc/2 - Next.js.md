# Next.js

We will explore the different features of Next.js by rebuilding a simple Rick and Morty application to visualize characters using **Next.js App Router**.

**Tip: Next;js provide a well made beginner friendly [documentation](https://nextjs.org/learn)**

## **App Router vs. Pages Router**

**Next.js App Router** (introduced in **Next.js 13**) in 2022, it comes with significant updates that modernize the framework by integrating advanced features like **React Server Components (RSC)** and a more modular structure.

The **Pages Router** is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

/!\ Make sure your select the right [Next.js documentation](https://nextjs.org/docs), At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the **App Router** and the **Pages Router** features. Since there are features that are unique to each directory, it's important to keep track of which tab is selected.

We will focus on using the **App Router** in this course.

| Feature               | App Router (`app/`)                    | Pages Router (`pages/`)                |
| --------------------- | -------------------------------------- | -------------------------------------- |
| **Rendering**         | Default: Server Components (RSC)       | Default: Client Components (CSR)       |
| **Layouts**           | Nested layouts with `layout.js`        | Global layout via `_app.js`            |
| **Data Fetching**     | `fetch()` inside Server Components     | `getStaticProps`, `getServerSideProps` |
| **File Organization** | Modular files: `layout.js`, `page.js`  | Single files for routes                |
| **Performance**       | Less client-side JavaScript by default | More client-side JavaScript            |
| **Streaming**         | Supported                              | Not supported                          |

## Installing Next.js

Next.js can be installed using the following command:

```bash
npm create next-app@latest
```

This will create a new Next.js application in the current directory.

## Folder Structure

|                                                                          |                            |
| ------------------------------------------------------------------------ | -------------------------- |
| [`app`](/docs/app/building-your-application/routing)                     | App Router                 |
| [`public`](/docs/app/building-your-application/optimizing/static-assets) | Static assets to be served |

### Top-level files

Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.

|                                                                                             |                                         |
| ------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Next.js**                                                                                 |                                         |
| [`next.config.js`](/docs/app/api-reference/config/next-config-js)                           | Configuration file for Next.js          |
| [`package.json`](/docs/app/getting-started/installation#manual-installation)                | Project dependencies and scripts        |
| [`.env`](/docs/app/building-your-application/configuring/environment-variables)             | Environment variables                   |
| [`.env.local`](/docs/app/building-your-application/configuring/environment-variables)       | Local environment variables             |
| [`.env.production`](/docs/app/building-your-application/configuring/environment-variables)  | Production environment variables        |
| [`.env.development`](/docs/app/building-your-application/configuring/environment-variables) | Development environment variables       |
| [`.eslintrc.json`](/docs/app/api-reference/config/eslint)                                   | Configuration file for ESLint           |
| `.gitignore`                                                                                | Git files and folders to ignore         |
| `next-env.d.ts`                                                                             | TypeScript declaration file for Next.js |
| `tsconfig.json`                                                                             | Configuration file for TypeScript       |

## Running the development server

Run `npm run dev` to start the development server on port 3000 and check to see if it's working by visiting [http://localhost:3000](http://localhost:3000).

This page will walk you through how you can fetch data in [Server Components](#server-components) and [Client Components](#client-components). As well as how to to [stream](#streaming) content that depends on data.

ext.js uses **file-system based routing**, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.

crete a folder called `characters` in the `app` directory.

## Creating a page

A **page** is UI that is rendered on a specific route. To create a page, add a [`page` file](/docs/app/api-reference/file-conventions/page) inside the `app` directory and default export a React component. For example, to create an index page (`/`):

```tsx filename="app/page.tsx" switcher
// app/characters/page.tsx
export default function CharactersPage() {
  return <h1>Hello Next.js!</h1>;
}
```

## Routing

**Page Routing** in Next.js uses their own [system](https://nextjs.org/docs/app/building-your-application/routing), so no need to install a separate package like `react-router-dom`. I wouldn't say it is simpler, especially once you start getting deeper into the documentation, but it does seem more.. intuitive. Next.js' **App Router** will collect the page level components for your app in a folder called `app`. If you open this folder, there will already be a file called `page.tsx` created for the template. This is the page component that will render at your base route (**"/"**).

To create a new route, you must create a folder inside the `app` folder. You define the **pathname** of your route with the **folder name**. Inside the folder, you must create a file called `page.tsx`. Next.js looks for these files to generate the routes for you.

### Routing Files

|                                                                                 |                     |                              |
| ------------------------------------------------------------------------------- | ------------------- | ---------------------------- |
| [`layout`](/docs/app/api-reference/file-conventions/layout)                     | `.js` `.jsx` `.tsx` | Layout                       |
| [`page`](/docs/app/api-reference/file-conventions/page)                         | `.js` `.jsx` `.tsx` | Page                         |
| [`loading`](/docs/app/api-reference/file-conventions/loading)                   | `.js` `.jsx` `.tsx` | Loading UI                   |
| [`not-found`](/docs/app/api-reference/file-conventions/not-found)               | `.js` `.jsx` `.tsx` | Not found UI                 |
| [`error`](/docs/app/api-reference/file-conventions/error)                       | `.js` `.jsx` `.tsx` | Error UI                     |
| [`global-error`](/docs/app/api-reference/file-conventions/error#global-errorjs) | `.js` `.jsx` `.tsx` | Global error UI              |
| [`route`](/docs/app/api-reference/file-conventions/route)                       | `.js` `.ts`         | API endpoint                 |
| [`template`](/docs/app/api-reference/file-conventions/template)                 | `.js` `.jsx` `.tsx` | Re-rendered layout           |
| [`default`](/docs/app/api-reference/file-conventions/default)                   | `.js` `.jsx` `.tsx` | Parallel route fallback page |

### Nested routes

|                 |                      |
| --------------- | -------------------- |
| `folder`        | Route segment        |
| `folder/folder` | Nested route segment |

### Colocation

In the `app` directory, nested folders define route structure. Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

However, even though route structure is defined through folders, a route is **not publicly accessible** until a `page.js` or `route.js` file is added to a route segment.

And, even when a route is made publicly accessible, only the **content returned** by `page.js` or `route.js` is sent to the client.

This means that **project files** can be **safely colocated** inside route segments in the `app` directory without accidentally being routable.

## API Route Handlers

Since Next.js can run both Server and Client files in the same project, we can also use the same router to handle [web requests](https://nextjs.org/docs/app/building-your-application/routing/route-handlers). The file will need to be named `route.ts` to be recognised as a route handler. This will look familiar after our last project, as you're sending back an HTTP response:

```ts
// pages/hello.ts
// this file is ts and not tsx as it is not a react component but a http handler (API route)
export async function GET() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return Response.json({ data });
}
```

You can test in postman or your browser than you received the expected response for a GET http query at `http://localhost:3000/hello`

A route **cannot** have both `page.tsx` and `route.tsx` files, it can only be used for one purpose. I would say best practice is to nest all your `route.tsx` routes in an `api` folder.

## Dynamic Routes

In React Router, we defined dynamic segments on our route path using `:value` syntax on the pathname string. In Next.js, we will use **square brackets []** on a folder name to establish a route as [dynamic](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes). If we want to create a folder structure for Rick & Morty characters, it might look something like this:

- 📁 App
  - 📄 page.tsx (_"/"_)
  - 📁 characters
    - 📄 page.tsx (_"/characters"_)
    - 📁 [id]
      - 📄 page.tsx (_"/characters/:id"_)

|                                                                                                           |                                  |
| --------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`[folder]`](/docs/app/building-your-application/routing/dynamic-routes#convention)                       | Dynamic route segment            |
| [`[...folder]`](/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)            | Catch-all route segment          |
| [`[[...folder]]`](/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments) | Optional catch-all route segment |

### Linking

Since all the navigation behaviour we implemented in our previous React projects came from the **React Router** package, we will have to get used to a some [differences](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating).

Next.js has its own [`<Link>` component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component) that can be imported and used instead of `<a>` tags to implement **Client Routing**. This is very much the same way as the `<Link>` component from **React Router** is used, but instead of a `to` property, this `<Link>` takes an `href`.

Next.js have a few useful **hooks** you can use in Client Components to replace those we learned for React Router.

- [`useRouter()`](https://nextjs.org/docs/app/api-reference/functions/use-router) will work similar to the `useNavigate()` hook
- [`usePathname()`](https://nextjs.org/docs/app/api-reference/functions/use-pathname) will give us the pathname we used to take from `useLocation()`
- [`useSearchParams()`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) will give us URL parameters.

Server Components have access to a [`redirect`](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#redirect-function) function instead.

## Layouts

### Root layout

The layout above is called a [root layout](/docs/app/api-reference/file-conventions/layout#root-layouts) because it's defined at the root of the `app` directory. The root layout is **required** and must contain `html` and `body` tags.

A layout is UI that is **shared** between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.

You can define a layout by default exporting a React component from a [`layout` file](/docs/app/api-reference/file-conventions/layout). The component should accept a `children` prop which can be a page or another [layout](#nesting-layouts).

### Nesting layouts

By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their `children` prop. You can nest layouts by adding `layout` inside specific route segments (folders).

For example, to create a layout that accepts your index page as child, add a `layout` file inside the `app` directory:

```tsx filename="app/characters/layout.tsx" switcher
// app/characters/layout.tsx
export default function CharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-slate-500">
        <p>Side Panel </p>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

## **Rendering in Next.js**

One huge concept you're going to have to wrap your head around will be the different ways Next.js renders your components. Very soon, the newest version of React will also be introducing a stable way to apply much of this functionality.
Next.js supports the following rendering strategies:

### **Client-Side Rendering (CSR)**

In this method:

1. The **browser** downloads a blank HTML page.
2. JavaScript runs on the **client side** to fetch data and generate content dynamically.

```tsx
"use client"; // CSR requires this directive

import Characters from "@/components/Characters";
import { Character } from "@/types";
import { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await res.json();
      setCharacters(results);
    }
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Client Side Rendering</h1>

      {characters ? (
        <Characters characters={characters} />
      ) : (
        <p>Characters Loading..</p>
      )}
    </div>
  );
}
```

- Benefits:

  - Great for highly interactive, single-page applications.
  - Reduces server load since rendering happens on the client.

- Drawbacks:
  - Slower initial load times since the browser must fetch and execute JavaScript.
  - SEO can be challenging (though mitigated by tools like Next.js).

### **Static Rendering**

Generates HTML during the **build process**. The resulting HTML is served as static files.

It is the default rendering method in Next.js App router.

1. **Static Site Generation (SSG)**:

   - Pages are pre-rendered at build time.
   - Perfect for content that doesn’t change frequently (e.g., blogs, marketing sites).
   - Example:

```tsx
// app/characters/page.tsx
import { Character } from "@/types";

export default async function CharactersPage() {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const { results: characters } = (await data.json()) as {
    results: Character[];
  };
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}
```

- Benefits:

  - Fast page load times.
  - Minimal server resources needed.
  - SEO-friendly.

    2.**SSG with dynamic routing.**

A nested route is a route composed of multiple URL segments. For example, the `/characters/[id]` route is composed of three segments:

- `/` (Root Segment)
- `characters` (Segment)
- `[id]` (Leaf Segment)

In Next.js:

- **Folders** are used to define the route segments that map to URL segments.
- **Files** (like `page` and `layout`) are used to create UI that is shown for a segment.
- **generateStaticParams** is a function used to defines all pages to be generate data for a segment.

Create a route for a specific character, create a new `[id]` folder inside `characters` and add a `page` file:

```tsx filename="app/characters/[id]/page.tsx" switcher
// app/characters/[id]/page.tsx"
fimport { Character } from '@/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

async function getCharacter(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    cache: 'force-cache',
  })
  const character: Character = await res.json()
  if (!character) notFound()
  return character
}

export async function generateStaticParams() {
  const { results: characters } = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json())
  return characters.map((character: Character) => ({
    id: String(character.id),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const character = await getCharacter(id)

  return {
    name: character.name,
  }
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await response.json() as Character
  return (
    <div>
      <h1>{character.name}</h1>
      <Image src={character.image} alt={character.name} width={300} height={300} />
    </div>
  )
}
```

3.**Incremental Static Regeneration (ISR)**:

- Allows static pages to be **updated incrementally**.
- You can define a `revalidate` interval to refresh static pages with new data.

  ```tsx
  // app/characters/[id]/page.tsx
  export const revalidate = 10; // Revalidate every 10 seconds
  ```

- Benefits:
  - Combines the speed of SSG with the flexibility of SSR.
  - Ideal for e-commerce, where product data changes periodically.

---

### **Dynamic Rendering**

Generates HTML on the **server** for every request.

1.**Server-Side Rendering (SSR)**:

As a developer, you do not need to choose between static and dynamic rendering as Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used. Instead, you choose when to cache or revalidate specific data, and you may choose to stream parts of your UI.

Next.js will automatically detect dynamically rendered route that uses both cached and uncached data fetches to switch between from the default static to dynamic rendering.
You however force SSR by setting the fetch option of `{ cache: 'no-store' }`.

- Benefits:
  - Ensures fresh data for every request.
  - Great for dashboards, authenticated content, or frequently updated pages.

2. **Streaming (App Router new feature)**:

When using `async/await` in Server Components, Next.js will opt into **dynamic rendering**. This means the data will be fetched and rendered on the server for every user request. If there are any slow data requests, the whole route will be blocked from rendering.

To improve the initial load time and user experience, you can use streaming to break up the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

There are two ways you can implement streaming in your application:

1. With the [`loading.tsx` file](#with-loadingjs)
2. With React's [`<Suspense>` component](#with-suspense)

### With `loading.tsx`

You can create a `loading.js` file in the same folder as your page to stream the **entire page** while the data is being fetched. For example, to stream `app/blog/page.js`, add the file inside the `app/blog` folder.

```tsx filename="app/streaming/loading.tsx" switcher
export default function Loading() {
  // Define the Loading UI here
  return <div>Loading...</div>;
}
```

On navigation, the user will immediately see the layout and a [loading state](#creating-meaningful-loading-states) while the page is being rendered. The new content will then be automatically swapped in once rendering is complete.

This approach works well for route segments (layouts and pages), but for more granular streaming, you can use `<Suspense>`.

### With `<Suspense>`

`<Suspense>` allows you to be more granular about what parts of the page to stream. For example, you can immediately show any page content that falls outside of the `<Suspense>` boundary, and stream in the list of blog posts inside the boundary.

```tsx filename="app/blog/page.tsx" switcher
import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogListSkeleton";

export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  );
}
```

### **Choosing the Right Rendering Method**

| **Rendering Type**                  | **When to Use**                                                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Static Site Generation**          | When data is static or infrequently updated. Great for blogs, marketing pages, and documentation.                             |
| **Incremental Static Regeneration** | When you want static pages but with periodic updates, such as product pages, event listings, or dynamic catalogs.             |
| **Server-Side Rendering**           | When data changes frequently or depends on request-specific information (e.g., dashboards, personalized content).             |
| **Streaming**                       | For large applications where you want content to load progressively for better UX.                                            |
| **Client-Side Rendering**           | When the application is highly interactive or the data doesn't need to be SEO-optimized (e.g., dashboards, complex web apps). |

### **Combining Renderings in the Next.js App Router**

The App Router allows combining these rendering methods **per route or even per component**:

- Use **Server Components** for server-side or static rendering.
- Add `'use client'` for components requiring CSR.

Example of a hybrid approach:

```javascript
// app/dashboard/page.js
export default function Dashboard() {
    return (
        <div>
            {/* Server-rendered content */}
            <ServerComponent />

            {/* Client-rendered content */}
            <ClientComponent />
        </div>
    );
}

// ServerComponent.js
export default async function ServerComponent() {
    const data = await fetch('https://api.example.com/data').then((res) => res.json());
    return <div>Data: {data.message}</div>;
}

// ClientComponent.js
'use client';
import { useState } from 'react';

export default function ClientComponent() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

By mixing and matching rendering methods, Next.js gives developers unparalleled flexibility to optimize for performance, SEO, and user experience.
