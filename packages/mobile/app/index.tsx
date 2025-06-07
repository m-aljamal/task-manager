import { Text, View } from "react-native";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClient, trpc as trpcClient } from "@/utils/trpc";

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this </Text>
        <Greeting />
      </View>
    </QueryClientProvider>
  );
}

const Greeting = () => {
  const trpc = trpcClient;
  const { data } = useQuery(trpc.greeting.queryOptions());
  console.log(data);

  return <Text>{data}</Text>;
};
