import React from 'react';
import { Route  } from 'react-router-dom';

export default function Router() {
  return (
    <div>
        <h3>Router</h3>
        <Router>
            <div>
                <Route path="/" component={RouterHome} />
                <Route path="/" component={RouterHome} />
                <Route path="/" component={RouterHome} />
                <Route /><Route path="/" component={RouterHome} />
            </div>
        </Router>
      
    </div>
  )
}


const RouterHome = () => {
    return (
        <div>
            <h3>Router Home</h3>
        
        </div>
    )
}
// const Users = () => {
//     return (
//         <div>
//             <h3>Users</h3>
        
//         </div>
//     )
// }
// const Contact = () => {
//     return (
//         <div>
//             <h3>Contact</h3>
//         </div>
//     )
// }
  
// const Product = () => {
//     return (
//         <div>
//             <h3>Product</h3>
//         </div>
//     )
// }
  