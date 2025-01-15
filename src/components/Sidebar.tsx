import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-48 min-h-[calc(100vh-64px)] bg-white border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-2 px-4 hover:bg-gray-100 rounded-lg">
              首页
            </Link>
          </li>
          <li>
            <Link href="/explore" className="block py-2 px-4 hover:bg-gray-100 rounded-lg">
              广场
            </Link>
          </li>
          <li className="border-t my-2"></li>
          <li>
            <Link href="/video/create" className="block py-2 px-4 hover:bg-gray-100 rounded-lg">
              AI 视频
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
