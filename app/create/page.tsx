import CreationForm from "../_components/CreationForm";
import DisappearingMessage from "../_components/DisappearingMessage";
import { IPageInputData } from "../_interfaces/page";

function page() {
  const handleSubmit = async (formData: IPageInputData) => {
    "use server";
    console.log(formData);
  };

  return (
    <div className="h-full mt-12">
      <DisappearingMessage
        message="Create your new"
        coloredMessage="Landing page"
        description="Set up a new landing page for your social media content in less than 10 minutes."
        time={5000}
      />
      <CreationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default page;
