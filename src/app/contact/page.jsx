import { createPageMetadata } from "@/lib/seo";
import CompoContact from "@/components/contact/CompoContact";

const Contact = () => {
  return (
    <>
    <CompoContact/>
    </>
  );
};

export default Contact;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
