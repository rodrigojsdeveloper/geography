const Footer = () => {
  return (
    <footer className="w-full h-90 mt-5 border-t border-solid border-grey-2">
      <div className="w-full max-w-1300 m-auto flex justify-between items-center pt-6">
        <p className="font-medium text-sm opacity-60">All rights reserved</p>

        <div className="flex justify-center items-center">
          <small className="font-medium text-sm opacity-60">
            Geography 2023
          </small>
          <button
            onClick={() => window.scroll({ top: 0 })}
            className="w-43 h-43 bg-grey-2 border-2 border-solid border-grey-2 flex justify-center items-center transition-all ease-in duration-300 rounded-def ml-6 hover:bg-grey-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2045 7.8295C11.6438 7.39017 12.3562 7.39017 12.7955 7.8295L19.5455 14.5795C19.9848 15.0188 19.9848 15.7312 19.5455 16.1705C19.1062 16.6098 18.3938 16.6098 17.9545 16.1705L12 10.216L6.0455 16.1705C5.60616 16.6098 4.89384 16.6098 4.4545 16.1705C4.01517 15.7312 4.01517 15.0188 4.4545 14.5795L11.2045 7.8295Z"
                fill="#E1E1E6"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
