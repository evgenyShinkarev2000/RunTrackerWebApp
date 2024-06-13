import { PropsWithChildren, createContext, useContext } from "react";
import { ApiHooks } from "src/store";


export const AppApiContext = createContext<typeof ApiHooks>(null!);

type ApiProviderProps = {
  runTrackerApi: typeof ApiHooks,
};

export function ApiProvider(props: PropsWithChildren<ApiProviderProps>)
{
  return <AppApiContext.Provider value={props.runTrackerApi}>
    {props.children}
  </AppApiContext.Provider>
}

export function useRunTrackerApi(){
  return useContext(AppApiContext);
}