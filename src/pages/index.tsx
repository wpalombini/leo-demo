import { useRouter } from "next/router";
import { useEffect } from "react";

import { PageContainer } from "@/components/ui/page-container/page-container.component";
import { UserDetails } from "@/components/user-details/user-details.component";
import { useUserStore } from "@/lib/stores/user.store";

export default function Home() {
  const { push } = useRouter();
  const { name, title } = useUserStore();
  const hasUserDetails = name && title;

  useEffect(() => {
    if (hasUserDetails) {
      push("/dashboard");
    }
  }, [name, title]);

  return <PageContainer>{!hasUserDetails && <UserDetails />}</PageContainer>;
}
