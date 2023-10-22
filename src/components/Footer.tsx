const Footer = () => {
  return (
    <footer className="mt-5 h-90 w-full border-t border-solid border-grey-2 px-4">
      <div className="m-auto flex w-full max-w-1300 items-center justify-between pt-6 max-768:flex-col  max-768:items-start">
        <p className="text-sm font-medium opacity-60">All rights reserved</p>

        <div className="flex items-center justify-center max-768:w-full max-768:justify-between">
          <small className="text-sm font-medium opacity-60 max-768:mt-5">
            Geography 2023
          </small>
          <button
            onClick={() => window.scroll({ top: 0 })}
            className="ml-6 flex h-43 w-43 items-center justify-center rounded-def border-2 border-solid border-grey-2 bg-grey-2 transition-all duration-300 ease-in hover:bg-grey-1 max-768:mt-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2045 7.8295C11.6438 7.39017 12.3562 7.39017 12.7955 7.8295L19.5455 14.5795C19.9848 15.0188 19.9848 15.7312 19.5455 16.1705C19.1062 16.6098 18.3938 16.6098 17.9545 16.1705L12 10.216L6.0455 16.1705C5.60616 16.6098 4.89384 16.6098 4.4545 16.1705C4.01517 15.7312 4.01517 15.0188 4.4545 14.5795L11.2045 7.8295Z"
                fill="#E1E1E6"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
