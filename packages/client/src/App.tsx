import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import { queryClient, trpc as trpcClient } from "./trpc";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <Greeting />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;


function Greeting() {
  const trpc = trpcClient 
  const {data} = useQuery(trpc.greeting.queryOptions())
  
  return <div>{data}</div>;
}