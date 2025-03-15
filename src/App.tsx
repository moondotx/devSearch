import NavBar from "./components/NavBar";
import UserContainer from "./components/UserContainer";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#141D2F]">
      <div className="max-h-screen max-w-[730px] mx-auto space-y-6   dark:text-white text-[#2B3442] p-6 transition-colors ">
        <div className="flex justify-between items-center ">
          <NavBar />
          <ThemeToggle />
        </div>
        <UserContainer />
      </div>
    </div>
  );
};

export default App;
