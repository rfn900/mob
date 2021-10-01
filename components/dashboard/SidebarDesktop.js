function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarDesktop({ navigation, setNavItem }) {
  const handleClick = (index) => {
    navigation.forEach((item) => {
      item.current = false;
    });
    setNavItem(index);
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-1 h-0">
          <div className="flex items-center justify-start flex-shrink-0 h-16 px-4 bg-indigo-50 border-r-2">
            <a href="/">
              <img
                src="MOG_Logo_vr2_DIY.png"
                className="h-16 pl-1 py-2"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                  onClick={() => handleClick(index)}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
