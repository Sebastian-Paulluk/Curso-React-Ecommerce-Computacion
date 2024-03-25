import { ConfigProvider } from 'antd';

const ButtonStyle =({children})=>{
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBg: '#1c5ba8',
                        defaultColor: 'white',
                        defaultBorderColor: '#1c5ba8',
                        //hover
                        defaultHoverBg: '#296ca8',
                        defaultHoverColor: 'white',
                        defaultHoverBorderColor: '#1c5ba8',
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export {ButtonStyle}