import { FC, useState, useEffect } from "react";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import { ProviderButton } from "@/components/buttons/ProviderButton";

export const SignIn: FC = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <>
      <h1 className="heading">Sign In</h1>
      <div className="flex gap-4 mt-4 md:mt-8 items-center">
        {providers &&
          Object.values(providers).map((provider) => (
            <ProviderButton
              key={provider.name}
              providerId={provider.id}
              onClick={() => signIn(provider.id)}
            />
          ))}
      </div>
    </>
  );
};
