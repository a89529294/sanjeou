import Link from "next/link";
import React from "react";
import {
  Categories,
  categories,
  ProductCategories,
  productsSubMenu,
  subMenu,
} from "../Footer";
import Chevron from "../Icons/Chevron";

const MobileFooterListItem = ({
  children,
  onExpandRender,
  expanded,
  onClick,
}: {
  children: string;
  onExpandRender: React.ReactNode;
  expanded: boolean;
  onClick: () => void;
}) => {
  return (
    <li className="text-sm font-medium border-b border-white border-solid text-bauhaus">
      <div className="flex justify-between py-3" onClick={onClick}>
        {children} <Chevron type="right" className="text-iron" />
      </div>
      {expanded ? onExpandRender : null}
    </li>
  );
};

const SubMenuItem = ({
  children,
  path,
  color = "default",
}: {
  children: React.ReactNode;
  path?: string;
  color?: "default" | "red";
}) => (
  <div
    className={`py-3 text-sm font-medium bg-white border-b border-solid pl-7 -mr-7 -ml-7 border-white-smoke ${
      color === "default" ? "text-bauhaus" : "text-primary-red"
    }`}
  >
    {path ? (
      <Link href={path}>
        <a>{children}</a>
      </Link>
    ) : (
      children
    )}
  </div>
);

function MobileFooterNav({
  isCategoryExpanded,
  isProductCategoryExpanded,
  dispatch,
  dispatchProductCategories,
}: {
  isCategoryExpanded: (category: Categories) => boolean;
  isProductCategoryExpanded: (pc: ProductCategories) => boolean;
  dispatch: React.Dispatch<Categories>;
  dispatchProductCategories: React.Dispatch<ProductCategories>;
}) {
  return (
    <ul className="hidden sm:block">
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[0].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[0])}
        onClick={() => dispatch(categories[0])}
      >
        {categories[0]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[1].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[1])}
        onClick={() => dispatch(categories[1])}
      >
        {categories[1]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <div>
            <SubMenuItem path="/products">全部</SubMenuItem>
            {productsSubMenu.map((s, i) => (
              <ul key={i}>
                <SubMenuItem color="red">
                  <div
                    className="flex justify-between mr-7"
                    onClick={() => dispatchProductCategories(s.series)}
                  >
                    {s.series}
                    <div className="text-bauhaus">
                      <Chevron type="right" />
                    </div>
                  </div>
                </SubMenuItem>
                {isProductCategoryExpanded(s.series) ? (
                  <div className="ml-3">
                    {s.items.map((item, j) => (
                      <SubMenuItem key={j} path={item.path}>
                        {item.text}
                      </SubMenuItem>
                    ))}
                  </div>
                ) : null}
              </ul>
            ))}
          </div>
        }
        expanded={isCategoryExpanded(categories[2])}
        onClick={() => dispatch(categories[2])}
      >
        {categories[2]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[2].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[3])}
        onClick={() => dispatch(categories[3])}
      >
        {categories[3]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[3].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[4])}
        onClick={() => dispatch(categories[4])}
      >
        {categories[4]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[4].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[5])}
        onClick={() => dispatch(categories[5])}
      >
        {categories[5]}
      </MobileFooterListItem>
      <MobileFooterListItem
        onExpandRender={
          <ul>
            {subMenu[5].map((m, i) => (
              <SubMenuItem path={m.path} key={i}>
                {m.text}
              </SubMenuItem>
            ))}
          </ul>
        }
        expanded={isCategoryExpanded(categories[6])}
        onClick={() => dispatch(categories[6])}
      >
        {categories[6]}
      </MobileFooterListItem>
    </ul>
  );
}

export default MobileFooterNav;
