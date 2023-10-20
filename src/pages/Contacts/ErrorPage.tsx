const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <span className="text-6xl text-red-500">!</span>
      <div className="text-3xl text-gray-700 mt-4">Page Not Found</div>
      <a
        href="/"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
