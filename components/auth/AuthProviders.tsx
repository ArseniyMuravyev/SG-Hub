import { FC, useState, useEffect } from "react";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import { Button } from "@/components/common/Button";
import { providerIcons } from "@/data";

export const AuthProviders: FC = () => {
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
    <ul className="flex gap-4 mt-4 md:mt-8 items-center">
      {providers &&
        Object.values(providers).map((provider) => (
          <Button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            icon={providerIcons[provider.id]}
            className="rounded-full p-6"
          />
        ))}
    </ul>
  );
};
