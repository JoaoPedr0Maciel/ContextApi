import { useForm } from "react-hook-form";
import { useAuth } from "../context/contex";

const Login = () => {
  const { users, login, logout } = useAuth();
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = ({ name }: { name: string; token: string }) => {
    const userForm = {
      name,
      token: "admin",
    };

    if (name.trim() === "") {
      alert("Preencha o nome!");
    } else {
      login(userForm);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col gap-9 items-center">
      <h1 className="text-white font-extrabold font-mono text-5xl">Login</h1>
      <p className="text-white font-extrabold font-mono text-xl">Context</p>

      <form className="flex gap-5" onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" placeholder="Type your name" {...register("name")} />
        <input
          className="text-black bg-slate-200 h-[2rem] w-[150px] cursor-pointer"
          type="submit"
          value="cadastrar usuário"
        />
      </form>

      <p className="text-white font-extrabold font-mono text-xl">
        {users?.map((user) => (
          <div key={user.name} className="flex gap-7">
            <p className="text-white font-extrabold font-mono text-xl">
              {user.name}
            </p>
            <p className="text-white font-extrabold font-mono text-xl">
              {user.token}
            </p>
          </div>
        ))}
      </p>

      <button
        className="text-black bg-slate-200 h-[2rem] w-[150px]"
        onClick={logout}
      >
        Click to logout
      </button>
    </div>
  );
};

export default Login;
