import React,{Component} from 'react';
import logo from "../Images/logo.png";
import { Link, withRouter} from "react-router-dom";
import TopNav from './TopNav';
 class Navigation extends Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
        hovered_womwn: false,
        hovered_kid: false,
        hovered_home: false,
        hovered_essential: false,
        hovered_top: false,
        makemoney:false,
        searchFeild:''
      };
    }
    menu_div_out = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top: false,
        makemoney:false
      });
    };
    searchchange=e=>{
      this.setState({searchFeild:e.target.value})
    }
    onserchclick=()=>{
      if(this.state.searchFeild.length > 0){     
        this.props.history.push(`/product/${this.state.searchFeild}`)
      }
    }
    men_mouseEnter = () => {
      this.setState({
        hovered: true,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };

    topc_mouseEnter = () => {
      this.setState({
        hovered:false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:true,
      });
    };
    women_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: true,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    kid_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: true,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    home_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: true,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    essential_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: true,
        hovered_top:false,
      });
    };
    makemoney_mouseEnter = () => {
      this.setState({
makemoney:true
      });
    };
    render() {
      const { hovered } = this.state;
      const { hovered_womwn } = this.state;
      const { hovered_kid } = this.state;
      const { hovered_home } = this.state;
      const { hovered_essential } = this.state;
      const { hovered_top } = this.state;
      const { makemoney } = this.state;
      const style = hovered ? { display: "block" } : {};
      const style2 = hovered_womwn ? { display: "block" } : {};
      const style3 = hovered_kid ? { display: "block" } : {};
      const style4 = hovered_home ? { display: "block" } : {};
      const style5 = hovered_essential ? { display: "block" } : {};
      const style6 = hovered_top ? { display: "block" } : {};
      const style7 = makemoney ? { display: "block" } : {};
      return (
        <div>
        <div className='nav--main' >
          <TopNav />
          <div className="navigation">
            <div className="logo_div" onMouseEnter={this.menu_div_out}>
              <div to="/">
                <Link to='/'>
                <img className="App-logo" src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="srch-profile" onMouseEnter={this.menu_div_out}>
              <div className="search-section">
                <form>
                  <label onClick={this.onserchclick} className="label">
                    <input onChange={this.searchchange}
                      className="search-box"
                      type="search"
                      placeholder="Search for..."
                    />
                  <span  className="fas fa-search"></span>
                  </label>
                </form>
              </div>
              <div className="pr-container">
                <Link to="/">
                  <div onMouseEnter={this.makemoney_mouseEnter} className="pre-container-link-div">
                  <i className="far fa-money-bill-alt"></i>
                    <p className="pr-container-des ">Make Money</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                  <i className="fas fa-bullhorn"></i>
                    <p className="pr-container-des ">Promotion</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                    <i className="fas fa-shopping-bag"></i>
                    <p className="pr-container-des">Bag</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product/topwear">
                  Topwear
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product/casual shirts">
                  Casual Shirts
                </Link>
                <Link className="drop-des" to="/product/formal shirts">
                  Formal Shirts
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  SweatShirts
                </Link>
                <Link className="drop-des" to="/product/jackets">
                  Jackets
                </Link>
                <Link className="drop-des" to="/product/Blazers Coats">
                  Blazers & Coats
                </Link>
                <Link className="drop-des" to="/product/sweaters">
                  Sweaters
                </Link>
                <Link className="drop-des" to="/product/suits">
                  Suits
                </Link>
                <Link className="drop-des" to="/product/rain jackets">
                  Rain Jackets
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/footwear">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product/sport shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/formal shoes">
                  Formal Shoes
                </Link>
                <Link className="drop-des" to="/product/sneakers">
                  Sneakers
                </Link>
                <Link className="drop-des" to="/product/sandales floaters">
                  Sandals & Floaters
                </Link>
                <Link className="drop-des" to="/product/flip flops">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product/socks">
                  Socks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/bottomwear">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product/jeans">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product/casual trousers">
                  Casual Trousers
                </Link>
                <Link className="drop-des" to="/product/formal trousers">
                  Formal Trousers
                </Link>
                <Link className="drop-des" to="/product/shorts">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product/track pant joggers">
                  Track Pants & Joggers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/gadgets">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product/smart wearables">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product/fitness Gadgets">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product/headphones">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product/speakers">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/sports wear">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product/sports shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/sports sandals">
                  Sports Sandals
                </Link>
                <Link className="drop-des" to="/product/active t-shirts">
                  Active T-Shirts
                </Link>
                <Link className="drop-des" to="/product/track pants and shorts">
                  Track Pants & Shorts
                </Link>
                <Link className="drop-des" to="/product/tracksuits">
                  Tracksuits
                </Link>
                <Link className="drop-des" to="/product/sport accessories">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product/Swimwear">
                  Swimwear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/festive wear">
                  Festive Wear
                </Link>
                <Link className="drop-des" to="/product/sherwanis">
                  Sherwanis
                </Link>
                <Link className="drop-des" to="/product/dhotis">
                  Dhotis
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/sleepwear">
                  Sleepwear
                </Link>
                <Link className="drop-des" to="/product/boxers">
                  Boxers
                </Link>
                <Link className="drop-des" to="/product/vest">
                  Vests
                </Link>
                <Link className="drop-des" to="/product/lounge">
                  Loungewear
                </Link>
                <Link className="drop-des" to="/product/thermals">
                  Thermals
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/fashion accessories">
                  Fashion Accessories
                </Link>
                <Link className="drop-des" to="/product/wallet">
                  Wallets
                </Link>
                <Link className="drop-des" to="/product/belt">
                  Belts
                </Link>
                <Link className="drop-des" to="/product/perfume">
                  Perfumes
                </Link>
                <Link className="drop-des" to="/product/cap hat">
                  Caps & Hats
                </Link>
                <Link className="drop-des" to="/product/phone case">
                  Phone Case
                </Link>
                <Link className="drop-des" to="/product/rings wristwear">
                  Rings & Wristwear
                </Link>
                <Link className="drop-des" to="/product/helmet">
                  Helmets
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product/plus size">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product/personal care">
                  Personal Care & Grooming
                </Link>
                <Link className="drop-title drp-lst" to="/product/sunglass frame">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product/watch">
                  Watches
                </Link>
                <Link className="drop-title drp-lst" to="/product/bag">
                  Bags & Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product/luggage trolley">
                  Luggages & Trolleys
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style2}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product/western wear women">
                  Western Wear
                </Link>
                <Link className="drop-des" to="/product/dress women">
                  Dresses & Jumpsults
                </Link>
                <Link className="drop-des" to="/product/tops shirts women">
                  Tops,T-Shirts & Shirts
                </Link>
                <Link className="drop-des" to="/jeans women">
                  Jeans & Jeggings
                </Link>
                <Link className="drop-des" to="/product/ trousers women">
                  Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product/shorts women">
                  Shorts & Skirts
                </Link>
                <Link className="drop-des" to="/product/shrugs women">
                  Shrugs
                </Link>
                <Link className="drop-des" to="/product/sweaters women">
                  Sweaters & Sweatshirts
                </Link>
                <Link className="drop-des" to="/product/jacket coat women">
                  Jackets & Coats
                </Link>
                <Link className="drop-des" to="/product/blazer women">
                  Blazers & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/footwear women">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product/women flats">
                  Flats
                </Link>
                <Link className="drop-des" to="/product/casual shoes women">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/heel">
                  Heels
                </Link>
                <Link className="drop-des" to="/product/boot women">
                  Boots
                </Link>
                <Link className="drop-des" to="/product/sports shoes women">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/women floaters">
                  Floaters
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/women sport wear">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product/women clothing">
                  Clothing
                </Link>
                <Link className="drop-des" to="/product/sport accessories women">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product/sport equipment">
                  Shorts Equipment
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/gadget women">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product/smart wearales women">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product/fitness gadget women">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product/headphones">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product/speakers">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/beauty">
                  Beauty
                </Link>
                <Link className="drop-des" to="/product/makeup">
                  Makeup
                </Link>
                <Link className="drop-des" to="/product/skincare">
                  Skincare
                </Link>
                <Link className="drop-des" to="/product/premium beauty">
                  Premium Beauty
                </Link>
                <Link className="drop-des" to="/product/lipsticks">
                  Lipsticks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/jewellery">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product/fashion jewellery">
                  Fashion Jewellery
                </Link>
                <Link className="drop-des" to="/product/fine jewellery">
                  Fine Jewellery
                </Link>
                <Link className="drop-des" to="/product/earrings">
                  Earrings
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/BD fashion wear">
                  BD & Fusion Wear
                </Link>
                <Link className="drop-des" to="/product/kurtas">
                  Kurtas
                </Link>
                <Link className="drop-des" to="/product/tunics tops">
                  Kurtas , Tunics & Tops
                </Link>
                <Link className="drop-des" to="/product/ethnic dress">
                  Ethnic Dresses
                </Link>
                <Link className="drop-des" to="/product/leggings sakwars churidars">
                  Leggings , Sakwars & Churidars
                </Link>
                <Link className="drop-des" to="/product/skirts plazzos">
                  Skirts & Palazzos
                </Link>
                <Link className="drop-des" to="/product/sarress blouses">
                  Sarrees & Blouses
                </Link>
                <Link className="drop-des" to="/product/dress materials">
                  Dress Materials
                </Link>
                <Link className="drop-des" to="/product/lehenga cholis">
                  Lehenga Cholis
                </Link>
                <Link className="drop-des" to="/product/dupattas shawls">
                  Dupattas & Shawls
                </Link>
                <Link className="drop-des" to="/product/jackets waistcoats">
                  Jackets & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/lingerie sleepwear">
                  Lingerie & Sleepwear
                </Link>
                <Link className="drop-des" to="/product/bra lingerie ">
                  Bras & Lingerie Sets
                </Link>
                <Link className="drop-des" to="/product/breief">
                  Briefs
                </Link>
                <Link className="drop-des" to="/product/shapewear">
                  Shapewear
                </Link>
                <Link className="drop-des" to="/product/swimwear">
                  Swimwear
                </Link>
                <Link className="drop-des" to="/product/camisoles thermals">
                  Camisoles & thermals
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product/belt scarves">
                  Belts,Scarves & More
                </Link>
                <Link className="drop-title drp-lst" to="/product/watch">
                  Watches & Wearable
                </Link>
                <Link className="drop-title drp-lst" to="/product/sunglasses frames">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product/plus size">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product/backpacks">
                  Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product/luggages trolleys">
                  Luggages & Trolleys
                </Link>
                <Link className="drop-title drp-lst" to="/product/handbag bag wallet">
                  Handbags,Bags & Wallets
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style3}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product/infant">
                  Infants
                </Link>
                <Link className="drop-des" to="/product/romper onsides">
                  Rompers & Onesies
                </Link>
                <Link className="drop-des" to="/product/clothing sets">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/shirts tops">
                  Tshirt & Tops
                </Link>
                <Link className="drop-des" to="/product/dress">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product/bottomwear">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product/winter wear">
                  Winter Wear
                </Link>
                <Link className="drop-des" to="/product/inneraear sleepwear">
                  Innerwear & SleepWear
                </Link>
                <Link className="drop-des" to="/product/infants accessories">
                  Infants Accessories
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product/boys footwear">
                  Boys Footwear
                </Link>
                <Link className="drop-des" to="/product/sports shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/sandals">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product/school shoes">
                  School Shoes
                </Link>
                <Link className="drop-des" to="/product/flip flop">
                  Flip Flops
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/girl footwear">
                  Girls Footwear
                </Link>
                <Link className="drop-des" to="/product/flats">
                  Flats
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/hels">
                  Heels
                </Link>
                <Link className="drop-des" to="/product/flipflop">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product/sandals">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product/school shoes">
                  School Shoes
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/kids accessories">
                  Kids Accessories
                </Link>
                <Link className="drop-des" to="/product/bag bagpack">
                  Bags & Backpacks
                </Link>
                <Link className="drop-des" to="/product/watch">
                  Watches
                </Link>
                <Link className="drop-des" to="/product/jewellery">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product/eyewear">
                  Eyewear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/home bath">
                  Home & Bath
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/girls clothing">
                  Girls Clothing
                </Link>
                <Link className="drop-des" to="/product/dresses">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product/tops">
                  Tops
                </Link>
                <Link className="drop-des" to="/product/tshirts">
                  Tshirts
                </Link>
                <Link className="drop-des" to="/product/clothing set">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/ethnic wear">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="/product/dungarees jumsuits">
                  Dungarees & Jumpsuits
                </Link>
                <Link className="drop-des" to="/product/skirts shorts">
                  Skirts & Shorts
                </Link>
                <Link className="drop-des" to="/product/tight leggings">
                  Tight & Leggings
                </Link>
                <Link className="drop-des" to="/product/capris jeans trousers">
                  Jeans , Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product/jacket,sweater,sweatshirts">
                  Jacket , Sweater ,Sweatshirts
                </Link>
                <Link className="drop-des" to="/product/innerwear sleepwear">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product/boys clothing">
                  Boys Clothing
                </Link>
                <Link className="drop-des" to="/product/tsirts">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  Shirts
                </Link>
                <Link className="drop-des" to="/product/shorts">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product/jeans">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product/trousers">
                  Trousers
                </Link>
                <Link className="drop-des" to="/product/clothing sets">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/ethnic wear">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="/product/trackpant payjamas">
                  Track Pants & Pyjamas
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product/brand">
                  Brands
                </Link>
                <Link className="drop-des" to="/product/h&m">
                  H&M
                </Link>
                <Link className="drop-des" to="/product/US polo">
                  U.S. Polo Assn. Kids
                </Link>
                <Link className="drop-des" to="/product/gap kid">
                  GAP Kids
                </Link>
                <Link className="drop-des" to="/product/gini jony">
                  Gini & Jony
                </Link>
                <Link className="drop-des" to="/product/peppermint">
                  Peppermint
                </Link>
                <Link className="drop-des" to="/product/next">
                  next
                </Link>
                <Link className="drop-des" to="/product/allen solly juniour">
                  Allen Solly Junior
                </Link>
                <Link className="drop-des" to="/product/nike">
                  Nike
                </Link>
                <Link className="drop-des" to="/product/pepe jeans">
                  Pepe Jeans
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style4}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product/home living">
                  Brands
                </Link>
                <Link className="drop-des" to="/product/Bombay Dyeing">
                  Bombay Dyeing
                </Link>
                <Link className="drop-des" to="/product/spaces">
                  Spaces
                </Link>
                <Link className="drop-des" to="/product/ d decor">
                  D Decor
                </Link>
                <Link className="drop-des" to="/product/home and living">
                   Home & Living
                </Link>
                <Link className="drop-des" to="/product/swayam">
                  Swayam
                </Link>
                <Link className="drop-des" to="/product/raymond">
                  Raymond home
                </Link>
                <Link className="drop-des" to="/product/trident">
                  Trident
                </Link>
                <Link className="drop-des" to="/product/story">
                  Story@Home
                </Link>
                <Link className="drop-des" to="/product/home spark">
                  Home Sparkle
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/bath">
                  Bath
                </Link>
                <Link className="drop-des" to="/product/bathtowels">
                  Bath Towels
                </Link>
                <Link className="drop-des" to="/product/hand face towels">
                  Hand & Face Towels
                </Link>
                <Link className="drop-des" to="/product/beach towels">
                  Beach Towels
                </Link>
                <Link className="drop-des" to="/product/towels set">
                  Towels Set
                </Link>
                <Link className="drop-des" to="/product/bath rugs">
                  Bath Rugs
                </Link>
                <Link className="drop-des" to="/product/bath robes">
                  Bath Robes
                </Link>
                <Link className="drop-des" to="/product/Bathroom Accessories">
                  Bathroom Accessories
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/home decor">
                  Home Decor
                </Link>
                <Link className="drop-des" to="/product/plants">
                  Plants & Planters
                </Link>
                <Link className="drop-des" to="/product/aromas candle">
                  Aromas & Candles
                </Link>
                <Link className="drop-des" to="/product/clock">
                  Clocks
                </Link>
                <Link className="drop-des" to="/product/mirror">
                  Mirrors
                </Link>
                <Link className="drop-des" to="/product/wall decor">
                  Wall Decor
                </Link>
                <Link className="drop-des" to="/product/wall shelves">
                  Wall Shelves
                </Link>
                <Link className="drop-des" to="/product/fountains">
                  Fountains
                </Link>
                <Link className="drop-des" to="/product/showpieces vases">
                  ShowPieces & Vases
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/kitchen table">
                  Kitchen & Table
                </Link>
                <Link className="drop-des" to="/product/serveware">
                  Serveware
                </Link>
                <Link className="drop-des" to="/product/bar drinkware">
                  Bar & Drinkware
                </Link>
                <Link className="drop-des" to="/product/cookware">
                  Cookware
                </Link>
                <Link className="drop-des" to="/product/kitchen storage">
                  Kitchen Storage
                </Link>
                <Link className="drop-des" to="/product/table cover">
                  Table Cover
                </Link>
                <Link className="drop-des" to="/product/furnising">
                  Furnishings
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/storage">
                  Storage
                </Link>
                <Link className="drop-des" to="/product/organisers">
                  Organisers
                </Link>
                <Link className="drop-des" to="/product/hook holder">
                  Hooks & Holders
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/lamp lighting">
                  Lamps & Lighting
                </Link>
                <Link className="drop-des" to="/product/floor lamp">
                  Floor Lamps
                </Link>
                <Link className="drop-des" to="/product/table lamp">
                  Table Lamps
                </Link>
                <Link className="drop-des" to="/product/wall lamp">
                  Wall Laps
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/flooring">
                  Flooring
                </Link>
                <Link className="drop-des" to="/product/carpet">
                  Carpets
                </Link>
                <Link className="drop-des" to="/product/mat dhurries">
                  Mats & Dhurries
                </Link>
                <Link className="drop-des" to="/product/door mat">
                  Door Mats
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product/bed liner furnising">
                  Bed Liner & Furnishing
                </Link>
                <Link className="drop-des" to="/product/bedsheet">
                  Bedsheets
                </Link>
                <Link className="drop-des" to="/product/bedding sets">
                  Bedding Sets
                </Link>
                <Link className="drop-des" to="/product/blamkets quilts dohar">
                  Blamkets,Quilts & Dohars
                </Link>
                <Link className="drop-des" to="/product/pillow cover">
                  Pillows & Pillow Covers
                </Link>
                <Link className="drop-des" to="/product/bed cover">
                  Bed Covers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title drp-lst" to="/product/cushion cushion cover">
                  Cushions & Cushion Covers
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style5}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms">
              <div className="drop-div dropessen">
                <Link className="drop-title drp-lst" to="/product/mask">
                  Mask
                </Link>
                <Link className="drop-title drp-lst" to="/product/skin care">
                  Skin Care
                </Link>
                <Link className="drop-title drp-lst" to="/product/hair care">
                  Haircare
                </Link>
                <Link className="drop-title drp-lst" to="/product/bath  body">
                  Bath & Body
                </Link>
                <Link className="drop-title drp-lst" to="/product/men grooming">
                  Men's Grooming
                </Link>
                <Link className="drop-title drp-lst" to="/product/baby care">
                  Baby Care
                </Link>
                <Link className="drop-title drp-lst" to="/product/home salon">
                  At Home Salon
                </Link>
                <Link className="drop-title drp-lst" to="/product/hair styling">
                  Hair Styling
                </Link>
                <Link className="drop-title drp-lst" to="/product/appliances">
                  Appliances
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style6}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms ddmstpc">
              <div className="drop-div ddvtc">
                <Link className="drop-title drp-lst" to="/product/smarttv androidtv">
                  Smart TV & Android TV
                </Link>
                <Link className="drop-title drp-lst" to="/product/desktop">
                  Desktop
                </Link>
                <Link className="drop-title drp-lst" to="/product/motor Bike">
                  Motor Bike
                </Link>
                <Link className="drop-title drp-lst" to="/product/speaker">
                  Speaker
                </Link>
                <Link className="drop-title drp-lst" to="/product/freezer">
                  Freezer
                </Link>
                <Link className="drop-title drp-lst" to="/product/refrigerator">
                  Refrigerator
                </Link>
                <Link className="drop-title drp-lst" to="/product/split ac">
                  Split AC
                </Link>
                <Link className="drop-title drp-lst" to="/product/laptop">
                  Laptop
                </Link>
                <Link className="drop-title drp-lst" to="/product/smart phone">
                  Smart Phone
                </Link>
                <Link className="drop-title drp-lst" to="/product/microwave oven">
                  Microwave Oven
                </Link>
              </div>
            </div>
          </div>

















          <div
            style={style7}
            className="drop-down drop2money"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms">
              <div className="drop-div ddvtc">
                <Link className="drop-title drp-lst" to="/Login">
                Affiliate Login
                </Link>
                <Link className="drop-title drp-lst" to="/Register">
                Affiliate Signup
                </Link>
              </div>
            </div>
          </div>
















        </div>
        <div className="menu-div-main">
              <div
                className="menu-div-one"
                onMouseEnter={this.menu_div_out}
              ></div>
              <div style={{textAlign:"left",paddingBottom:"10px",marginLeft:"70px"}} className="menu-div">
                {/* men_link class removed */}
                <Link to=''
                  className="menu-link-2 "
                  onMouseEnter={this.men_mouseEnter}
                >
                  Men
                </Link>
                <Link to=''
                  className="menu-link-2"
                  
                  onMouseEnter={this.women_mouseEnter}
                >
                  Women
                </Link>
                <Link to=''
                  className="menu-link-2"
                  
                  onMouseEnter={this.kid_mouseEnter}
                >
                  Kids
                </Link>
                <Link to=''
                  className="menu-link-2"
                  
                  onMouseEnter={this.home_mouseEnter}
                >
                  Home & Living
                </Link>
                <Link to=''
                  className="menu-link-2"
                  
                  onMouseEnter={this.essential_mouseEnter}
                >
                  Essentials
                </Link>
                <Link to=''
                  className="menu-link-2"
                  
                  onMouseEnter={this.topc_mouseEnter}
                >
                  Top Category
                </Link>
              </div>
            </div>
        </div>
      );
    }
  }
  export default withRouter(Navigation)