import Link from 'next/link';

export default function Menu() {
    return (
    <div>
        <ul className='flex justify-end text-sm text-gray-500 mx-1'>
            <li>
                <Link href="/admin/dashboard"> 관리자(mincoding)</Link> 
            </li>
            <li className='mx-1'>
                |
            </li>
            <li>
                <Link href="/">정보수정</Link>
            </li>
            <li className='mx-1'>
                |
            </li>
            <li>
                <Link href="/">로그아웃</Link>
            </li>
        </ul>
    </div>
    )
}