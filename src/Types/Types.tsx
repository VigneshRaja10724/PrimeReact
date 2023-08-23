export interface RouterChildren {
    path: string,
    component : React.ElementType
}

export interface Router {
    path: string,
    component : React.ElementType,
    // children : RouterChildren[]
}

// {route.children} &&
// {route.children.map((childRoute: any, index: number) =>(
//   <Fragment key={index}>
//     <Route
//       path={childRoute.path}
//       element={
//         <>
//           <Suspense fallback={<p>Loading...</p>} />
//           <childRoute.component />
//         </>
//       }
//     />
//   </Fragment>
//   ))}