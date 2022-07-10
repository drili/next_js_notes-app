import Head from "next/head";
import Navbar from './Navbar'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Note App</title>
        </Head>

        <Navbar></Navbar>
        {children}
    </>
)

export default Layout