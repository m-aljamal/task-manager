import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="size-6" />
          Light Mode
        </>
      ) : (
        <>
          <MoonIcon className="size-6" />
          Dark Mode
        </>
      )}
    </Button>
  );
}
