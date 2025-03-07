export default function LoginButton() {
  return (
    <button
      className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
    >
      Log in
    </button>
  );
}
