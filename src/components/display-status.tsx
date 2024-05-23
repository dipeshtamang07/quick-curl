const getStatusClass = (status: number) => {
  if (status >= 200 && status < 300) {
    return "bg-green-500";
  }
  if (status >= 300 && status < 500) {
    return "bg-yellow-500";
  }

  if (status >= 500 && status < 600) {
    return "bg-red-500";
  }

  return "bg-gray-500";
};

const getStatusMessage = (status: number) => {
  switch (status) {
    case 200:
      return "200 Success";
    case 201:
      return "201 Created";
    case 400:
      return "400 Bad Request";
    case 401:
      return "401 Forbidden";
    case 404:
      return "404 Not Found";
    case 500:
      return "500 Internal Server Error";
    default:
      return `${status} Unknown Status`;
  }
};

const DisplayStatus = ({ status }: { status: number }) => {
  return (
    <div className={`px-2 py-1 inline-block text-white ${getStatusClass(status)}`}>
      {getStatusMessage(status)}
    </div>
  );
};

export default DisplayStatus;
