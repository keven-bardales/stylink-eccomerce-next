'use client';

export default function CustomizeNowButton() {
  const handleScroll = (id: string) => {
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={() => {
        handleScroll('customize');
      }}
      className="w-full grow rounded-full border-2 border-skin-main bg-transparent p-3 text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl"
    >
      Personaliza Ya!
    </button>
  );
}
