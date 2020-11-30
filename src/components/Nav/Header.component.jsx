import React, {useState} from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import "./Header.styles.scss";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("mail");
  
  const handleClick = (e) => { 
    console.log(e.key)
  }

  return (
    <div className="header">
      <Link to="/" className="header__links--link">Logo</Link>
      <div className="header__links">
        <NavLink to="/about" className="header__links--link" activeClassName="header__links--link--active">
          <i className="fas fa-shopping-bag"></i>
          <p>Shop</p>
        </NavLink>
        <NavLink to="/resources" className="header__links--link" activeClassName="header__links--link--active">
          <i className="fas fa-shopping-cart"></i>
          <p>Cart</p>
        </NavLink>
        {!!false ?
          <Link to="dashboard" className="header__links--cta">
            <img src="./img/profile_pic.jpeg" alt="" />
            <p>Ebuka</p>
          </Link>:
          <Link to="login" className="header__links--cta">
            <i class="fas fa-user-plus"></i>
            <p>Log In</p>
          </Link>
        }
      </div>
    </div>
    // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    //   <Menu.Item key="mail" icon={<AppstoreOutlined />}>
    //     Home
    //   </Menu.Item>
    //   <Menu.Item key="mail" icon={<AppstoreOutlined />}>
    //     Home
    //   </Menu.Item>
    //   <Menu.Item key="mail" icon={<AppstoreOutlined />}>
    //     Home
    //   </Menu.Item>
    //   <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
    //     <Menu.Item key="setting:1">op 1</Menu.Item>
    //     <Menu.Item key="setting:2">Option 2</Menu.Item>
    //   </SubMenu>
    // </Menu>
  );
}

export default Header;