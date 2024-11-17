import logo from "../../assets/olxlogodark.png";
import search from "../../assets/searchicon.png";
import downArrow from "../../assets/downarrow.png";
import sell from "../../assets/screenshot.png";
import { useNavigate } from "react-router-dom";
import AddProduct from "../../pages/AddProduct";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handle_logout = () =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('is_admin')

    navigate("/login")
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" height={50} width={50} />
        </div>
        <div className="inputs">
          <div className="state">
            <button className="header-transparant-btn-left">
              <img
                src={search} 
                alt=""
                height={20}
                width={20}
                className="seatchImg"
              />
            </button>
            <input type="text" placeholder="India" className="searchstate" />
            <button className="header-transparant-btn-right">
              <img src={downArrow} alt="" height={25} width={25} />
            </button>
          </div>

          <div className="find-items">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="searchProducts"
            />
            <button className="search-btn">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
        <div className="language">
          <button className="language-btn">English</button>
          <img src={downArrow} alt="" height={25} width={25} />
        </div>
        <div className="header-btns">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="login-btn">
          
          
            <img src={sell} alt="" onClick={()=>navigate("ad_products")} height={50} width={110} />
            
            
          </button>
          <button className="login-btn" onClick={handle_logout}>Logout</button>
        </div>
      </div>
      <div className="categories">
        <div className="allCategory">
          <button className="all-cateogy-btn">ALL CATEGORIES</button>
          <img src={downArrow} alt="" height={25} width={25} />
        </div>
        <div className="category-list">
          <ul className="category-list-list">
            <li className="category-listitem">Cars</li>
            <li className="category-listitem">Motorcycles</li>
            <li className="category-listitem">Mobile Phones</li>
            <li className="category-listitem">
              For Sale: Houses & Appartments
            </li>
            <li className="category-listitem">Comercial & Other Vehicles</li>
            <li className="category-listitem">
              For Rent: Houses and Appartments
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar