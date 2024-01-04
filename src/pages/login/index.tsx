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
import { useKeyloakDomain } from "@/store";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Login = () => {
  const { keycloak } = useKeycloak();
  const keycloakServerDomain = useKeyloakDomain((state) => state.getDomain());
  const keycloakServerDomainIndex = useKeyloakDomain(
    (state) => state.domainIndex
  );
  const setKeycloakServerDomainIndex = useKeyloakDomain((state) => state.setDomainIndex)
  const navigate = useNavigate();

  if (keycloak?.authenticated) navigate("/personal");

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Keycloak Login</CardTitle>
          <CardDescription>final demo</CardDescription>
          <CardDescription>API Server: {keycloakServerDomain}</CardDescription>
          <RadioGroup defaultValue={keycloakServerDomainIndex.toString()} onValueChange={(value) => setKeycloakServerDomainIndex(Number(value))}>
            <div className="flex gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0" id="server1"/>
                <Label htmlFor="server1">Server 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="server2" />
                <Label htmlFor="server2">Server 2</Label>
              </div>
            </div>
          </RadioGroup>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full"
            onClick={() =>
              keycloak.login({
                redirectUri: `${window.location.href}personal`,
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
