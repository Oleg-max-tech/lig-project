import { FOOTER_MENU_ITEMS } from "./constants";
import MenuLink from "./MenuLink";

const Menu = () => {
  return (
    <nav className="flex flex-wrap gap-20 justify-center md:justify-start">
      <div className="flex flex-col gap-5">
        {FOOTER_MENU_ITEMS.slice(0, 2).map(({ id, label, path }) => (
          <MenuLink key={id} href={path}>
            {label}
          </MenuLink>
        ))}
      </div>
      <div className="flex flex-col gap-5 ml-20">
        {FOOTER_MENU_ITEMS.slice(2).map(({ id, label, path }) => (
          <MenuLink key={id} href={path}>
            {label}
          </MenuLink>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
