import { ConfigProvider } from 'antd';

const DropdownListStyle =({children})=>{
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'white',
                    colorBgElevated: '#1c5ba8',
                    colorText: 'white', 
                    controlItemBgHover: '#296ca8',

                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export {DropdownListStyle}