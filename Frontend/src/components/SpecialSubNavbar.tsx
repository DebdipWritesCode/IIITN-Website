interface SpecialSubNavbarProps {
  id: number;
  name: string;
  categories: {
    id: number;
    name: string;
    subLinks: {
      id: number;
      name: string;
      url: string;
    }[];
  }[];
  setHoveredItem: (id: number | null) => void;
}

const SpecialSubNavbar: React.FC<{ data: SpecialSubNavbarProps }> = ({
  data,
}) => {
  return (
    <div
      onMouseEnter={() => data.setHoveredItem(data.id)}
      onMouseLeave={() => data.setHoveredItem(null)}
      className="absolute top-10 -left-20 w-screen h-auto bg-white/95 shadow-lg p-6">
      <div className="w-full flex space-x-10 justify-between">
        {data.categories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Category Heading */}
            <h3 className="bg-[#C1500C] text-white font-semibold text-lg px-6 py-3 rounded-t-md">
              {category.name}
            </h3>

            {/* SubLinks */}
            <ul className="bg-gray-100 w-60 shadow-md rounded-b-md">
              {category.subLinks.map((link) => (
                <li
                  key={link.id}
                  className="border-b border-gray-300 hover:bg-gray-200">
                  <a
                    href={link.url}
                    className="block px-4 py-2 text-black font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialSubNavbar;
