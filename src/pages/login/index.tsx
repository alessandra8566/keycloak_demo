import { Button } from "@/components/ui/button";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  if (keycloak?.authenticated) navigate("/personal");

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Keycloak Login</CardTitle>
          <CardDescription>final demo</CardDescription>
          <CardDescription>domain: {window.location.href}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full"
            onClick={() =>
              keycloak.login({
                redirectUri: `${window.location.href}/personal`,
              })
            }
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
