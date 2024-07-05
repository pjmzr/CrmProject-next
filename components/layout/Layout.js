import Link from "next/link"

function Layout({children}) {
  return (
    <>
        <header className="header">
            <h2>PjmZr CRM</h2>
            <Link href="add-customer">Add Customer</Link>
        </header>
        <div className="main">
            {children}
        </div>
        <footer className="footer">
             <a href="#">PjmZr</a> Next.js Framework | CRM Project &copy;
        </footer>
    </>
  )
}

export default Layout