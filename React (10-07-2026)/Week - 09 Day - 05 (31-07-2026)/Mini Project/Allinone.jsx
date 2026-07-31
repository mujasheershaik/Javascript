import { lazy, Suspense } from "react";
import Fragment from "./Fragment";
import Eventbinding from "./Eventbinding";
import Listrendering from "./Listrendering";
import Destructuring from "./Destructuring";
import Memo from "./Memo";
import Usememo1 from "./Usememo1";
import Usecallback1 from "./Usecallback1";
import Portal from "./Portal";
import Purecomponent from "./Purecomponent";



const Home = lazy(() => import("./Home"));

function Allinone() {
  return (
    <>
      <h1>React Concepts Demo</h1>

      <Fragment/>
      <Eventbinding/>
      <Listrendering/>
      <Destructuring/>
      <Memo/>
      <Usememo1/>
      <Usecallback1/>
      <Portal/>
      <Purecomponent/>

      <Suspense fallback={<h2>Loading Home...</h2>}>
        <Home/>
      </Suspense>
    </>
  );
}

export default Allinone;