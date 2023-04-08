import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBook } from '../context/BookContext';

export default function ProductQuickviewModal() {
  const {
    selectedBook: book,
    openPreviewModal,
    setOpenPreviewModal,
  } = useBook();
  return (
    <Transition.Root show={openPreviewModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpenPreviewModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              enterTo='opacity-100 translate-y-0 md:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 md:scale-100'
              leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            >
              <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                  <button
                    type='button'
                    className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                    onClick={() => setOpenPreviewModal(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
                    <div className='sm:col-span-4 lg:col-span-5'>
                      <div className='aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-100'>
                        <img
                          src={book.volumeInfo.imageLinks?.thumbnail}
                          alt={book.volumeInfo?.title}
                          className='object-cover object-center w-full'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-8 lg:col-span-7'>
                      <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
                        {book.volumeInfo?.title}
                      </h2>

                      <section
                        aria-labelledby='information-heading'
                        className='mt-3'
                      >
                        <h3 id='information-heading' className='sr-only'>
                          Book information
                        </h3>
                        <div className='mt-6'>
                          <h4 className='sr-only'>Description</h4>
                          <p className='text-sm h-80 overflow-auto text-gray-700'>
                            {book.volumeInfo?.description}
                          </p>
                        </div>
                      </section>
                      <section
                        aria-labelledby='options-heading'
                        className='mt-6'
                      >
                        <h3 id='options-heading' className='sr-only'>
                          Book options
                        </h3>

                        <p className='absolute left-4 top-4  sm:static sm:mt-6 font-bold'>
                          Published Date: {book.volumeInfo?.publishedDate}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
