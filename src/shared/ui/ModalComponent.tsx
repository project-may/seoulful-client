'use client';
import React from 'react';
import BookmarkWarning from '/public/assets/bookmark-warning.svg';
import LoginWarning from '/public/assets/login-warning.svg';
import { ModalType } from '../model/types';
import { useRouter } from 'next/navigation';

export const ModalComponent = ({
  link,
  setShowModal,
  isUserLoggedIn,
  eventName,
}: ModalType) => {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      {isUserLoggedIn && link === 'bookmark' ? (
        <div className="w-[300px] h-[160px] bg-white p-4 rounded shadow-lg">
          <p className="flex items-center mb-5">
            <BookmarkWarning className="mr-2" />
            북마크 완료
          </p>
          <p className="mt-2 pr-2 text-center">
            <strong>{eventName}</strong>를 북마크 했습니다.
          </p>
          <button
            onClick={closeModal}
            className="w-[60px] ml-6 h-8 mt-5 bg-[#3F7E8C] text-white rounded"
          >
            확인
          </button>
        </div>
      ) : (
        <div className="w-[300px] h-[160px] bg-white p-4 rounded shadow-lg">
          <p className="flex items-center">
            <LoginWarning className="mr-2" />
            로그인 필요
          </p>
          <p className="ml-6 mt-2 pr-2">
            해당 기능은<strong className="ml-1">로그인</strong>이 필요합니다.
            <p>
              <strong>로그인</strong>하시겠습니까?
            </p>
          </p>
          <button
            onClick={() => router.push('/auth')}
            className="w-[60px] ml-6 h-8 mt-5 mb-2 bg-[#BF5E70] text-white rounded"
          >
            로그인
          </button>
          <button
            onClick={closeModal}
            className="w-[60px] ml-3 h-8 mt-5 mb-2 bg-white border border-gray-400 text-gray-400 rounded"
          >
            취소
          </button>
        </div>
      )}
    </div>
  );
};
