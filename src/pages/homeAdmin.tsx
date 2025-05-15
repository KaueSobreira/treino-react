import AdminLayout from "@/components/layout-siderbar";

const HomeAdmin = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-xl font-bold">Painel do Admin</h1>
        <p>Conteúdo do painel vai aqui.</p>
      </div>
    </AdminLayout>
  );
};

export default HomeAdmin;
