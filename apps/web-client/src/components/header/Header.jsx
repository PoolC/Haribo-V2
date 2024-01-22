import { useState } from 'react';
import poolcIcon from '~/assets/images/poolc-icon.png';
import { Link } from 'react-router-dom';
import { BarsIcon, HeaderBlock, HeaderIconBox, HeaderIcons, LogoImage } from './Header.styles';
import Menus from './Menus/Menus';
import { Avatar, Button, Dropdown } from 'antd';
import { MENU } from '~/constants/menus';
import { createStyles } from 'antd-style';
import { MenuOutlined } from '@ant-design/icons';

const useStyles = createStyles(({ css }) => ({
  avatarButton: css`
    width: 40px;
    height: 40px;
    padding: 0;
  `,
  logo: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-right: 10px;
  `,
  badge: css`
    background-color: #47be9b;
    padding: 4px 8px;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: 700;
  `,
}));

const Header = ({ member, onLogout }) => {
  const { styles } = useStyles();

  const {
    status: { isLogin },
    user: { isAdmin, role, profileImageURL },
  } = member;

  const [menuVisible, setMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  const onCloseMenu = () => {
    setMenuVisible(() => false);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    onLogout();
  };

  const dropDownItems = (() => {
    const arr = [
      {
        label: <Link to={`/${MENU.MY_PAGE}`}>My Page</Link>,
        key: 'my-page',
      },
      {
        label: 'Sign Out',
        key: 'sign-out',
        onClick: handleLogout,
      },
    ];

    if (isAdmin) {
      arr.splice(2, 0, {
        label: <Link to={`/${MENU.ADMIN}`}>Admin</Link>,
        key: 'admin',
      });
    }

    return arr;
  })();

  return (
    <HeaderBlock>
      <HeaderIcons>
        <Link to="/">
          <div className={styles.logo}>
            <LogoImage src={poolcIcon} alt="logo" onClick={onCloseMenu} />
            <div className={styles.badge}>Beta</div>
          </div>
        </Link>
        <HeaderIconBox>
          {isLogin && (
            <Dropdown menu={{ items: dropDownItems }}>
              <Button shape={'circle'} className={styles.avatarButton}>
                <Avatar src={profileImageURL} size={36} />
              </Button>
            </Dropdown>
          )}
          <BarsIcon onClick={onToggleMenu}>
            <MenuOutlined />
          </BarsIcon>
        </HeaderIconBox>
      </HeaderIcons>
      <Menus menuVisible={menuVisible} onToggleMenu={onToggleMenu} isLogin={isLogin} role={role} isAdmin={isAdmin} dropDownItems={dropDownItems} profileImageURL={profileImageURL} />
    </HeaderBlock>
  );
};

export default Header;
