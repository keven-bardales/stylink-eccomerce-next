'use client';
export default function CustomizeButton() {
  const handleScroll = (id: string) => {
    // first prevent the default behavior
    // get the href and remove everything before the hash (#)

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button
      onClick={() => {
        handleScroll('customize');
      }}
      className="w-full rounded-full border-2 border-skin-main bg-transparent p-3 text-xl font-bold text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:p-5"
    >
      Personaliza Ya!
    </button>
  );
}
