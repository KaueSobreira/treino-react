import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-primary px-4 py-2 shadow-md">
      <SidebarTrigger
        className=" text-white hover:text-white pr-9"
        size={"sm"}
      />
      <p className="text-white font-bold text-3xl">Nome da Barbearia</p>
    </div>
  );
};

export default Header;
