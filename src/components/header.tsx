import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src={theme ? "/Logo Light.png" : "/Logo Dark.png"}
            alt="Climate Logo"
            className="h-14"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
