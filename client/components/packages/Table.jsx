const Table = (props) => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{props.title} Listing</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Package Name</th>
                                <th>Total Companies</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.packages.map((pkg, index) => (  
                                <tr key={index}>  
                                    <td>{pkg.name}</td>  
                                    <td>{pkg.companies}</td>  
                                    <td>{pkg.status}</td>
                                    <td>View Detail</td>  
                                </tr>  
                            ))}  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;