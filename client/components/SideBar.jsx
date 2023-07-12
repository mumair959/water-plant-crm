import Link from 'next/link';

const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-text mx-3">
                    <img className="sidebar-logo" src="../img/panikhataa.png"/>
                </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link href="/dashboard">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </a>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link href="/companies">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-building" />
                        <span>Companies</span>
                    </a>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link href="/packages">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-archive" />
                        <span>Packages</span>
                    </a>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link href="/invoices">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-dollar-sign" />
                        <span>Invoices</span>
                    </a>
                </Link>
            </li>
            <hr className="sidebar-divider" />
        </ul>
    );
}

export default SideBar;