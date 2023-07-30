import { Link } from "react-router-dom";

const Homepage = ({ products }) => {
    console.log("Homepage data: ", products);
    return (
        <div>
              <Link to={`/admin/product/add`}><button>Add New Product</button></Link>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>


                        <table>
                            <tr>
                                <td colSpan={3}>
                                    <h3><Link to={`/detail/${item.id}`}>{item.name}</Link></h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>{item.price}</p>
                                </td>
                                <td>
                                    <Link to={`/admin/product/dele/${item.id}`}><button>delete</button></Link><br />
                                    <Link to={`/admin/product/update/${item.id}`}><button>Update</button></Link>
                                </td>
                            </tr>

                        </table>

                        

                    </div>
                )
            })}
        </div>
    )
}

export default Homepage