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
                                <th>Company Name</th>
                                <th>Company Owner</th>
                                <th>Package</th>
                                <th>Monthly Fees</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.companies.map((comp, index) => (  
                                <tr key={index}>  
                                    <td>{comp.name}</td>  
                                    <td>{comp.user.name}</td>  
                                    <td>{comp.package.name}</td>
                                    <td>Rs. {comp.package_net_price}</td>  
                                    <td>View Details</td>  
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