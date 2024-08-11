const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md  border-b border-b-gray-700">
      <div className="container py-4">
        <h2 className="text-2xl capitalize">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
