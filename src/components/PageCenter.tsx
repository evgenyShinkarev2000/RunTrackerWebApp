import { PropsWithChildren } from "react";

export function PageCenter(props: PropsWithChildren) {
  return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
    {props.children} 
    </div>
}