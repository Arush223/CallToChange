import { SignUp, ClerkProvider } from "@clerk/nextjs";
import NavLinks from "../../nav-links"; // Adjust the path as needed

const SignUpPage = () => (
  <ClerkProvider>
    <div style={styles}>
      <NavLinks />
      <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />
    </div>
  </ClerkProvider>
);

export default SignUpPage;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
