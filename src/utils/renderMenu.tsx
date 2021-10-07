import React from "react";
import { Menu } from "antd"
import { useTranslation } from "react-i18next"


export const RenderMenu = (menu: any, addPane: any) => {

    const { t } = useTranslation();


    if (Array.isArray(menu)) {
        
        return menu.map(item => {
            if (!item.children || !item.children.length) {
             

                    return (
                        <Menu.Item key={item.key || item.name} icon={item?.icon} onClick={() => addPane(item)}>
                           
                                <span >{t(item.name)}</span>
                        </Menu.Item>
                    )
            } else {
                /**
                 * with sub menu
                 */
                return (
                    <Menu.SubMenu key={item.key} icon={item?.icon} title={<span>


                        <span>{t(item.name)}</span></span>}>
                        {RenderMenu(item.children, addPane)}
                    </Menu.SubMenu>
                )
            }
        })
    }
}