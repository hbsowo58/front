import Link from 'next/link';
import './globals.css'

export default function Home() {
    return (
        <>
        <h1>
            <Link href="/admin" className='border bg-gray'>WEB</Link>
            <p className='text-tahiti'>WEB</p>
        </h1>
        <ol>
        <li>
          <Link href="/read/1">html</Link>
        </li>
        <li>
          <Link href="/read/2">css</Link>
        </li>
      </ol>

      <ul>
        <li>
          <Link href="/create">create</Link>
        </li>
        <li>
          <Link href="/update/1">update</Link>
        </li>
        <li>
          <input type="button" value="delete"></input>
        </li>
      </ul>
        </>
    )
}