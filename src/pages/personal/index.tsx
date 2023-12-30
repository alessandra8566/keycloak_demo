import { Button } from "@/components/ui/button";
import { useKeycloak } from "@react-keycloak/web";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Personal = () => {
  const { keycloak } = useKeycloak();

  console.log(`${window.location.protocol}://${window.location.host}`)

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Hi, {keycloak.tokenParsed?.preferred_username}</CardTitle>
          <CardDescription>final demo</CardDescription>
          {keycloak.tokenParsed && <CardDescription>domain: {window.location.href}</CardDescription>}
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full"
            onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Personal;
