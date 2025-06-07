import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "server";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { Platform } from "react-native";

// http://10.0.2.2:4000 for android emulator
// http://localhost:4000 for ios emulator
// http://192.168.0.102:4000 for real device

export const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            retry: false
        }
    }
});
const trpcClient = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url:  
    Platform.OS === "ios" ? "http://localhost:4000" : "http://10.0.2.2:4000",
    headers: () => ({
        "x-platform": "mobile",
      }),
   })],
});
export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});

 