'use client'

import { useState } from 'react';


const data = [
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },
    { email: 'asdasdasd@asdsadsd.com', lectureName: '웹' },

];


const itemsPerPage = 9;

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage1, setCurrentPage1] = useState(1);


    const indexOfLastItem = currentPage1 * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);


    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        } else {
            setCurrentPage(12);
        }

    };
    
    const goToNextPage = () => {
        if (currentPage < 12){
            setCurrentPage(prevPage => prevPage + 1);
        } else{
            setCurrentPage(1)
        }
    }

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <span
              key={i}
              onClick={() => goToPage(i)}
              className={`cursor-pointer px-2 py-1 rounded-lg mx-1 ${
                i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {i}
            </span>
          );
        }
        return pageNumbers;
    };

    const goToPage = page => {
        setCurrentPage1(page);
    };


    return (
        <div>
            <p>대시보드</p>

            <div>
                <div>
                    <ul className="flex justify-evenly mt-7 text-center">
                        <li className="p-3">
                            <p className="mb-3">회원수</p>
                            <p>1000</p>
                        </li>
                        <li className="p-3">
                            <p className="mb-3">현재강의 수</p>
                            <p>10</p>
                        </li>
                        <li className="p-3">
                            <p className="mb-3">강의신청 수</p>
                            <p>2000</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center my-5">
                    <div className="border w-3/5 h-300px">
                    </div>
                </div>
                <p className="text-center">날짜별 강의 신청자 수</p>
            </div>

            <div className="mt-20">

                <p className="text-center mb-5">강의 신청 현황</p>

                <div className="flex justify-center mb-10">
                    <div className="mr-5">
                        <div>
                            <button
                            onClick={goToPreviousPage}>
                                {'<'}
                            </button>

                            <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                {currentPage} 월
                            </span>
                            
                            <button
                            onClick={goToNextPage}>
                                {'>'}
                            </button>
                        </div>

                    </div>
                    <p>총 학습자: 123명 / 총 금액: 1,500,000원</p>
                </div>


                <div className='flex items-center justify-center'>
                    <table className="table-auto border-collapse w-3/5">
                        <thead className='border-t'>
                        <tr className='border-b'>
                            <th className="px-4 py-2">이메일</th>
                            <th className="px-4 py-2">강의명</th>
                        </tr>
                        </thead>
                        <tbody className='border-b'>
                            {currentItems.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 text-center">{item.email}</td>
                                    <td className="px-4 py-2 text-center">{item.lectureName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    <div className="flex justify-center mt-4">
                        {renderPagination()}
                    </div>


            </div>
        </div>

    )
}