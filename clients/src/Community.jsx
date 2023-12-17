import { Outlet, Navigate, Route, Routes,useLocation } from "react-router-dom";
import { Home, Register } from "./Pages";

function Layout() {
    const user = null;
    const location = useLocation();

    return user?.token? (
        <Outlet />
    ) : (
        <Navigate to='/Login' state= {{from: location}} replace />
    );
}

function Community(){
    <img src="https://images-ext-1.discordapp.net/external/VcbplOIjZpFIwuszyFKUTK-4qjPaKA-SPVkCnub82d8/https/images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt49f84cd5568be8e4/631a8bab1566e20e82f3028c/960_Ana.jpg?format=webp/">
    // return <div className='w-ull min-h-[100vh]'>
    //     <Routes>
    //         <Route element={<Layout />}>
    //             <Route path='/' element={<Home />} />
    //             <Route path='/Profile/:id?' element={<Profile />} />
    //         </Route>

    //         <Route path='/register' element={<Register />} />
    //         <Route path='/login' element={<Login />} />
    //         <Route path= '/reset-password' element={<ResetPassword />} />
    //     </Routes>

    //     <div className='fixed bottom-0 left-0 right-0'>
    //         <img src="https://images-ext-1.discordapp.net/external/VcbplOIjZpFIwuszyFKUTK-4qjPaKA-SPVkCnub82d8/https/images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt49f84cd5568be8e4/631a8bab1566e20e82f3028c/960_Ana.jpg?format=webp/">
    //     </div>
    // </div>
}