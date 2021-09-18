export default function Footer() {
  return (
    <div className="bg-gradient-to-tr from-indigo-100 to-indigo-50 mt-12 lg:mt-0 space-y-12 lg:space-y-0 shadow-md justify-center p-12 lg:p-24 flex flex-col lg:flex-row items-center rounded-t-big">
      <div className="w-full lg:w-2/5 flex flex-col space-y-2 lg:space-y-4">
        <h3 className="font-mono text-4xl font-bold">MOG</h3>
        <p className="font-sans text-lg text-gray-600">
          Some description here bla bla bla
        </p>
      </div>
      <div className="w-full lg:w-1/5">col 2</div>
      <div className="w-full lg:w-1/5">col 3</div>
      <div className="w-full lg:w-1/5">col 4</div>
    </div>
  );
}
