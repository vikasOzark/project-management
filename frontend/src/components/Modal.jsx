export const Modal = ({children, header, close}) => {
    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 flex right-0 left-0 z-50 justify-center items-center bg-gray-500 bg-opacity-30 w-full md:inset-0 h-modal md:h-full">
                <div class="p-2 w-full max-w-2xl h-full md:h-auto  flex items-center justify-center">
                    {/* <!-- Modal content --> */}
                    <div class="  p-4 bg-white rounded-lg shadow z-55 dark:bg-gray-800 sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div class="flex justify-between items-center p-1 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                {header}
                            </h3>
                            <button onClick={close} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}