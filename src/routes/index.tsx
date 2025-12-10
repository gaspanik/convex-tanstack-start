import { Link, createFileRoute } from '@tanstack/react-router'
import { useMutation } from 'convex/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const {
    data: { viewer, numbers },
  } = useSuspenseQuery(convexQuery(api.myFunctions.listNumbers, { count: 10 }))

  const addNumber = useMutation(api.myFunctions.addNumber)

  return (
    <main className="flex flex-col gap-16 p-8">
      <h1 className="font-bold text-4xl text-center">
        Convex + Tanstack Start
      </h1>
      <div className="flex flex-col gap-8 mx-auto max-w-lg">
        <p>Welcome {viewer ?? 'Anonymous'}!</p>
        <p>
          Click the button below and open this page in another window - this
          data is persisted in the Convex cloud database!
        </p>
        <p>
          <button
            className="bg-dark dark:bg-light px-4 py-2 border-2 rounded-md text-light dark:text-dark text-sm"
            onClick={() => {
              void addNumber({ value: Math.floor(Math.random() * 10) })
            }}
          >
            Add a random number
          </button>
        </p>
        <p>
          Numbers:{' '}
          {numbers.length === 0 ? 'Click the button!' : numbers.join(', ')}
        </p>
        <p>
          Edit{' '}
          <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded-md font-mono font-bold text-sm">
            convex/myFunctions.ts
          </code>{' '}
          to change your backend
        </p>
        <p>
          Edit{' '}
          <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded-md font-mono font-bold text-sm">
            src/routes/index.tsx
          </code>{' '}
          to change your frontend
        </p>
        <p>
          Open{' '}
          <Link
            to="/anotherPage"
            className="text-blue-600 underline hover:no-underline"
          >
            another page
          </Link>{' '}
          to send an action.
        </p>
      </div>
    </main>
  )
}

