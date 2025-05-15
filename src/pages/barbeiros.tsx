import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const barbeiros = [
  {
    nome: "Kaue",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
  {
    nome: "Felipe",
    CPF: "9999999999",
    Ativo: "true",
  },
];

const Barbeiros = () => {
  return (
    <div className="pt-5 pr-0">
      <h1 className="text-2xl font-bold mb-4">Barbeiros Cadastrados</h1>

      <div
        className="grid gap-4 w-full"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          margin: "0 auto",
          maxWidth: "2000px", // expande bem em monitores grandes
        }}
      >
        {barbeiros.map((barbeiro, index) => (
          <Card key={index}>
            <CardHeader className="items-center text-center">
              <Avatar className="mx-auto mb-2">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="imagem do Barbeiro"
                />
              </Avatar>
              <CardTitle>{barbeiro.nome}</CardTitle>
              <CardDescription>CPF: {barbeiro.CPF}</CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              {barbeiro.Ativo === "true" ? "Ativo" : "Inativo"}
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button
                asChild
                className="bg-indigo-500 !text-white hover:bg-indigo-600"
              >
                <Link to="/">Editar</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Barbeiros;
