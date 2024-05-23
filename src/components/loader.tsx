const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100px]">
      Loading
      <span className="ml-1.5 flex items-center gap-1">
            <span className="animate-flashing w-1 h-1 bg-black dark:bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-100 w-1 h-1 bg-black dark:bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-200 w-1 h-1 bg-black dark:bg-white rounded-full inline-block" />
          </span>
    </div>
  );
};

export default Loader;
