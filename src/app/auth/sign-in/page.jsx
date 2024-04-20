import { SignIn, ClerkProvider } from "@clerk/nextjs";
import NavLinks from '../../nav-links'; // Adjust the path as needed

const SignInPage = () => (
  <ClerkProvider>
    <div style={styles}>
      <NavLinks />
      <SignIn path="/auth/sign-in/[[...rest]]" routing="path" signUpUrl="/auth/sign-up" />
    </div>
  </ClerkProvider>
);

export default SignInPage;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
