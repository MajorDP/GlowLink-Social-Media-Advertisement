import AuthForm from "../_components/AuthForm";
import { IFormData } from "../_interfaces/auth";

function Page() {
  const handleSubmit = async (formData: IFormData, isRegistering: boolean) => {
    "use server";
    console.log(formData, isRegistering);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white flex items-center justify-center p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <AuthForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Page;
